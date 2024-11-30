"use client";

import Link from "next/link";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <div className="w-full h-[17vh] bg-white flex items-center justify-around px-6 text-black font-Roboto ">
        <div className="text-[40px] font-semibold">Mack JR</div>
        <div className=" flex list-none text-[1.5rem] gap-[2rem]">
          <Link
            href="#home"
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div>{children}</div>
    </>
  );
}
