"use client"; // ระบุว่าเป็น Client Component
import { FaAngleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isBottom, setIsBottom] = useState(false); 
  const checkScrollPosition = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 1) {
      setIsBottom(true); 
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isBottom && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10  bg-black  p-3 rounded-full shadow-lg hover:bg-[#000000dc] ">
          <FaAngleUp />
        </button>
      )}
    </div>
  );
}
