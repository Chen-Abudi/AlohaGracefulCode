import { authModalState } from "@/atoms/authModalAtom";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
import Image from "next/image";
import Logo from "../../../public/logo-banner.png";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };

  return (
    <nav className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        {/* <img src="" alt="AlohaGracefulCode" className="h-full" /> */}
        <Image
          src={Logo}
          alt="Homepage AlohaGracefulCode Logo"
          className="relative top-2 right-7 w-auto"
          priority
        />
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 linear"
          onClick={handleClick}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
