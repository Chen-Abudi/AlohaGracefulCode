import Link from "next/link";
import React from "react";
import Image from "next/image";

import Logo from "../../../public/logo-banner.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-24 flex-1 relative">
          <Image
            src={Logo}
            alt="Logo"
            className="h-full absolute top-0 left-[-58px] w-auto"
            priority
          />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="https://buymeacoffee.com/graceabudi"
              className="bg-dark-fill-3 py-2 px-4 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
              target="_blank"
              rel="noreferrer"
            >
              Premium
            </a>
          </div>
          {!user && (
            <Link href="/auth">
              <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded text-dark-gray-8 hover:bg-dark-fill-2">
                Sign In
              </button>
            </Link>
          )}
          {user && (
            <div className="relative group cursor-pointer">
              <img
                className="w-8 h-8 rounded-full"
                src="/avatar.png"
                alt="User Profile Photo"
              />
              <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-linear">
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
