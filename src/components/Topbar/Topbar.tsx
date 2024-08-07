import Link from "next/link";
import React from "react";
import Image from "next/image";

import Logo from "../../../public/logo-banner.png";

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div
        className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}
      >
        <Link href="/" className="h-24 flex-1 relative">
          <Image
            src={Logo}
            alt="Logo"
            width={360}
            className="h-full absolute top-0 left-[-58px]"
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
          <Link href="/auth">
            <button className="bg-dark-fill-3 py-1 px-2 cursor-pointer rounded text-dark-gray-8 hover:bg-dark-fill-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
