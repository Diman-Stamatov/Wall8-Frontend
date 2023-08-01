import React from "react";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-gray-800 text-white relative"
      role="navigation"
    >
      <a href="#" className="pl-8">
        Logo
      </a>
      <div className="px-4 cursor-pointer md:hidden"></div>
      <div className="pr-8 md:block hidden">
        <a className="p-4" href="#">
          Login
        </a>
        <a className="p-4" href="#">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
