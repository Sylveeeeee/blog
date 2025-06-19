"use client";

import Link from "next/link";
import Menu from "./components/Menu";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Menu />
      </nav>
      {/* Desktop Menu */}
      <nav className="max-md:hidden w-full h-[17vh] bg-white flex justify-around items-center  px-6 text-black font-Roboto">
        <div className="text-[38px] font-semibold">Mack Jirawat</div>
        <ul className="flex list-none text-[1.5rem] gap-[2rem]">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-black transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Main Content */}
      <main>{children}</main>
    </>
  );
}