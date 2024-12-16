import React, { useEffect, useState } from "react";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";

import PreferenceNavigation from "./PreferenceNavigation/PreferenceNavigation";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { problems } from "@/utils/problems";
import { pid } from "process";
import { useRouter } from "next/router";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

type PlaygroundProps = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
  fontSize: string;
  settingsModalIsOpen: boolean;
  dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({
  problem,
  setSuccess,
  setSolved,
}) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  let [userCode, setUserCode] = useState<string>(problem.starterCode);

  const [settings, setSettings] = useState<ISettings>({
    fontSize: "16px",
    settingsModalIsOpen: false,
    dropdownIsOpen: false,
  });

  const [user] = useAuthState(auth);
  const {
    query: { pid },
  } = useRouter();

  const handleSubmit = async () => {
    if (!user) {
      toast.error("To submit your code, please login", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    try {
      userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));

      const cb = new Function(`return ${userCode}`)();
      const handler = problems[pid as string].handlerFunction;

      if (typeof handler === "function") {
        const success = handler(cb);

        if (success) {
          toast.success("Congrats, all test cases passed!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);

          const userRef = doc(firestore, "users", user.uid);
          await updateDoc(userRef, {
            solvedProblems: arrayUnion(pid),
          });
          setSolved(true);
        }
      }
    } catch (error: any) {
      console.log(error.message);
      if (
        error.message.startsWith(
          "AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:"
        )
      ) {
        toast.error("Oops! One or more test cases failed!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${pid}`);
    if (user) {
      setUserCode(code ? JSON.parse(code) : problem.starterCode);
    } else {
      setUserCode(problem.starterCode);
    }
  }, [pid, user, problem.starterCode]);

  const onChange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${pid}`, JSON.stringify(value));
  };

  return (
    <div className="relative flex flex-col bg-dark-layer-1 overflow-x-hidden">
      <PreferenceNavigation settings={settings} setSettings={setSettings} />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        minSize={60}
        sizes={[60, 40]}
      >
        <div className="overflow-auto w-full">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={onChange}
            style={{ fontSize: settings.fontSize }}
            extensions={[javascript()]}
          />
        </div>

        <div className="w-full overflow-auto px-5">
          {/* Test Cases Heading */}
          <div className="h-10 flex items-center space-x-6">
            <div className="relative h-full flex flex-col justify-center cursor-pointer">
              <div className="font-medium text-sm text-white leading-5">
                Test Cases
              </div>
              <hr className="absolute bottom-1 h-0.5 w-full border-none rounded-full bg-white" />
            </div>
          </div>

          {/* Test Cases Body */}
          <div className="flex">
            {problem.examples.map((example, index) => (
              <div
                key={example.id}
                className="items-start mt-2 mr-2"
                onClick={() => setActiveTestCaseId(index)}
              >
                <div className="flex items-center flex-wrap gap-y-4">
                  <div
                    className={`relative items-center font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3
                hover:bg-dark-fill-2 rounded-lg px-4 py-1 whitespace-nowrap cursor-pointer
                ${activeTestCaseId === index ? "text-white" : "text-gray-400"}`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 font-semibold">
            <p className="mt-4 font-medium text-sm text-white">Input:</p>
            <div className="mt-2 px-3 py-[10px] w-full border border-transparent rounded-lg cursor-text text-white bg-dark-fill-3">
              {problem.examples[activeTestCaseId].inputText}
            </div>
            <p className="mt-4 font-medium text-sm text-white">Output:</p>
            <div className="mt-2 px-3 py-[10px] w-full border border-transparent rounded-lg cursor-text text-white bg-dark-fill-3">
              {problem.examples[activeTestCaseId].outputText}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter handleSubmit={handleSubmit} />
    </div>
  );
};

export default Playground;
