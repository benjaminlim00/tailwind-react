import React, { useState, useEffect, useCallback } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function AccDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuState = isOpen ? "block" : "hidden";

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="relative hidden sm:block">
        {/* this is needed to position the absolute avatar */}
        <button
          className="ml-12 block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-400 focus:outline-none focus:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
            alt="avatar"
          />
        </button>
        <div
          className={`py-2 mt-2 w-48 bg-white rounded-lg shadow-xl absolute right-0 ${menuState}`}
        >
          <a
            href="!#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Account settings
          </a>
          <a
            href="!#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Support
          </a>
          <a
            href="!#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>

      {/* this below is for small screens */}
      <div className="relative py-5 border-gray-800 border-t-2 sm:hidden">
        {/* this is needed to position the absolute avatar */}
        <div className="flex items-center">
          <img
            className="h-10 w-10 border-2 border-gray-400 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1445&q=80"
            alt="avatar"
          />
          <span className="ml-3 text-white font-semibold">Jane Doe</span>
        </div>
        <div className={`mt-4`}>
          <a href="!#" className="text-gray-400 block hover:text-white">
            Account settings
          </a>
          <a href="!#" className="mt-2 text-gray-400 block hover:text-white">
            Support
          </a>
          <a href="!#" className="mt-2 text-gray-400 block hover:text-white">
            Sign out
          </a>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
