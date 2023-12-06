import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };

  const [inputs, setInputs] = useState({
    email: "",
    displayYourName: "",
    password: "",
  });

  const router = useRouter();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const handleRegister = async (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form className="space-y-5 px-5 pb-4" onSubmit={handleRegister}>
      <h3 className="text-l font-medium text-white">
        Register to AGC Platform
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-3 text-gray-300"
        >
          Email
        </label>
        <input
          onChange={handleChangeInput}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          name="email"
          type="email"
          id="email"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="displayYourName"
          className="text-sm font-medium block mb-3 text-gray-300"
        >
          Display Your Name
        </label>
        <input
          onChange={handleChangeInput}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          name="displayYourName"
          type="displayYourName"
          id="displayYourName"
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-3 text-gray-300"
        >
          Password
        </label>
        <input
          onChange={handleChangeInput}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          name="password"
          type="password"
          id="password"
          placeholder="********"
        />
      </div>
      <button
        className="w-full text-white focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center bg-brand-orange hover:bg-brand-orange-s"
        type="submit"
      >
        Register
      </button>
      <div className="text-sm font-medium text-gray-200">
        Already have an account? {""}
        <a
          href="#"
          className="text-blue-600 hover:underline"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};

export default Signup;
