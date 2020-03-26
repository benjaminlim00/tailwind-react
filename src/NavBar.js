import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import AccDropDown from "./AccDropDown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const menuState = isOpen ? "block" : "hidden";

  const renderButton = () => {
    return (
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MdClose className="text-white"></MdClose>
          ) : (
            <GiHamburgerMenu className="text-white"></GiHamburgerMenu>
          )}
        </button>
      </div>
    );
  };

  return (
    <header className="bg-gray-900 flex-1 py-3 px-6 sm:flex sm:justify-between">
      <div className="flex items-center justify-between ">
        <p className="text-white font-bold">WorkCation</p>
        <div>{renderButton()}</div>
      </div>
      <div
        className={`mt-2 ${menuState} sm:block sm:flex sm:items-center sm:m-0`}
      >
        <a
          className="block text-white font-semibold rounded -mx-2 px-2 py-1 sm:m-0 hover:bg-gray-800"
          href="!#"
        >
          List your property
        </a>
        <a
          className="block text-white font-semibold rounded -mx-2 px-2 py-1 mt-1 sm:m-0 sm:ml-4 hover:bg-gray-800"
          href="!#"
        >
          Trips
        </a>
        <a
          className="block text-white font-semibold rounded -mx-2 px-2 py-1 mt-1 sm:m-0 sm:ml-4 hover:bg-gray-800"
          href="!#"
        >
          Messages
        </a>

        <AccDropDown />
      </div>
    </header>
  );
}
