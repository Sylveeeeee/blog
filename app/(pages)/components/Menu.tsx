import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Projects", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contect" },
];

export default function MenuIcon() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onHashChange = () => {
      setActive(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <nav className="w-full h-[17vh] bg-white flex items-center justify-between px-10 text-black font-Roboto relative">
      <div className="text-[38px] font-semibold">Mack Jirawat</div>
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 rounded flex items-center justify-center"
      >
      
          <FiMenu className="text-black text-[50px] transition-all duration-300" />
      
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0   bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Menu Drawer */}
      <div
        className={`fixed font-medium top-10 right-10 origin-top-right w-56 z-40 flex flex-col px-6 p-4 text-black shadow-lg text-[30px] bg-white
        transition-all duration-300
        ${open
          ? "scale-100 opacity-100 pointer-events-auto"
          : "scale-0 opacity-0 pointer-events-none"}
        `}
        style={{ borderRadius: "1rem", marginTop: "1.5rem" }}
      >
        {/* ปุ่มปิดซ้ำใน Drawer (ถ้าต้องการ) */}
        <button
          className="self-end mb-2 text-2xl text-gray-500 hover:text-black"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <FiX className="hover:text-[#646464] text-black text-[40px] " />
        </button>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`mb-2 transition ${
              active === item.href
                ? "font-extrabold text-black"
                : "text-gray-700"
            }`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}