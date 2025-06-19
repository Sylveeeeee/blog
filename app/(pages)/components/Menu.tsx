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
    <div>
      <div className="w-full h-[17vh] bg-white flex items-center  px-10 text-black font-Roboto ">
        <div className="text-[38px] font-semibold">Mack Jirawat</div>

        {/* Icon Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 rounded items-center flex justify-center fixed top-10 right-4 z-50 bg-white "
        >
          {open ? (
            <FiX className="text-black text-[40px] transition-all duration-300 " />
          ) : (
            <FiMenu className="text-black text-[50px] transition-all duration-300" />
          )}
        </button>

        {/* Menu Drawer */}
        <div
          className={`fixed font-medium top-10 right-6 origin-top-right w-50 bg-white z-40 flex flex-col px-6 p-4 text-black shadow-lg text-[30px]
          transition-all duration-300
          ${open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-0 opacity-0 pointer-events-none"}
          `}
          style={{ borderRadius: "1rem" }}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mb-2  transition ${
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
      </div>
    </div>
  );
}