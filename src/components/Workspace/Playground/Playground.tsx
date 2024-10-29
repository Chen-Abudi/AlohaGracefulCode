import React from "react";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";

import PreferenceNavigation from "./PreferenceNavigation/PreferenceNavigation";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";

type PlaygroundProps = {};

const Playground: React.FC<PlaygroundProps> = () => {
  return (
    <div className="relative flex flex-col bg-dark-layer-1 overflow-x-hidden">
      <PreferenceNavigation />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        minSize={60}
        sizes={[60, 40]}
      >
        <div className="overflow-auto w-full">
          <CodeMirror
            value="const a = 1;"
            theme={vscodeDark}
            style={{ fontSize: 16 }}
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
            {/* Case 1 */}
            <div className="items-start mt-2 mr-2 text-white">
              <div className="flex items-center flex-wrap gap-y-4">
                <div
                  className="relative items-center font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3
                hover:bg-dark-fill-2 rounded-lg px-4 py-1 whitespace-nowrap cursor-pointer"
                >
                  Case 1
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="items-start mt-2 mr-2 text-white">
              <div className="flex items-center flex-wrap gap-y-4">
                <div
                  className="relative items-center font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3
                hover:bg-dark-fill-2 rounded-lg px-4 py-1 whitespace-nowrap cursor-pointer"
                >
                  Case 2
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="items-start mt-2 mr-2 text-white">
              <div className="flex items-center flex-wrap gap-y-4">
                <div
                  className="relative items-center font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3
                hover:bg-dark-fill-2 rounded-lg px-4 py-1 whitespace-nowrap cursor-pointer"
                >
                  Case 3
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 font-semibold">
            <p className="mt-4 font-medium text-sm text-white">Input:</p>
            <div className="mt-2 px-3 py-[10px] w-full border border-transparent rounded-lg cursor-text text-white bg-dark-fill-3">
              nums: [2,7,11,15], target: 9
            </div>
            <p className="mt-4 font-medium text-sm text-white">Output:</p>
            <div className="mt-2 px-3 py-[10px] w-full border border-transparent rounded-lg cursor-text text-white bg-dark-fill-3">
              [0,1]
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter />
    </div>
  );
};

export default Playground;
