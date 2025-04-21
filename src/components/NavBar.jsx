import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-center space-x-10 py-6  shadow">
      <a href="#home" className="text-lg underline text-rose-800 font-medium hover:text-rose-500">
        Home
      </a>
      <a href="#about" className="text-lg underline text-rose-800 font-medium hover:text-rose-500">
        About
      </a>
    </nav>
  );
}

export default NavBar;

