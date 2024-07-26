import React, { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";

const PopUp = ({ text, isOpen: initialIsOpen, type }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  useEffect(() => {
    if (initialIsOpen) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [initialIsOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-5 right-5 p-2.5 rounded text-white flex items-center justify-between z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none ${
        isOpen ? "opacity-100 pointer-events-auto" : ""
      }`}
      style={{ backgroundColor: type === "success" ? "#2f855a" : "#CE2029" }}
    >
      <span className="text-sm sm:text-base lg:text-lg">{text}</span>
      <button
        className="bg-transparent border-none text-white cursor-pointer text-3xl ml-2.5"
        onClick={closePopup}
      >
        <BsXLg />
      </button>
    </div>
  );
};

export default PopUp;