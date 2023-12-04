import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};
const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  return (
    <form className="space-y-5 px-5 pb-4">
      <h3 className="text-l font-medium text-white">Sign in to AGC Platform</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-3 text-gray-300"
        >
          Your Email
        </label>
        <input
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-500 text-white"
          name="email"
          type="email"
          id="email"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-3 text-gray-300"
        >
          Your Password
        </label>
        <input
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-500 text-white"
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
        Login
      </button>
      <button
        className="flex w-full justify-end"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-200">
        Not Registered Yet? {""}
        <a
          href="#"
          className="text-blue-600 hover:underline"
          onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;
