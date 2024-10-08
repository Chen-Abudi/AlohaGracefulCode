import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleReset = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success("Password reset email sent successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // alert(error.message);
    }
  }, [error]);

  return (
    <form
      className="space-y-5 px-5 lg:px-7 pb-3 sm:pb-5 xl:pb-7"
      onSubmit={handleReset}
    >
      <h3 className="text-xl font-medium text-white">Reset Password</h3>
      <p className="text-sm text-white">
        Forgot your password? We all been there but no worries. Enter your email
        address below, and we&apos;ll send you an email allowing you to reset
        it.
      </p>
      <div>
        <label
          className="text-sm font-medium block mb-2 text-gray-300"
          htmlFor="email"
        >
          Your Email
        </label>
        <input
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 bg-gray-700 border-gray-600 placeholder-gray-500 text-white"
          type="email"
          id="email"
          name="email"
          placeholder="name@company.com"
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <button
        className={`w-full text-white focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center bg-brand-orange hover:bg-brand-orange-s`}
        type="submit"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
