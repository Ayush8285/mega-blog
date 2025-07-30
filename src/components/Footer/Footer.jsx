/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-8 shadow-inner border-t border-gray-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Logo width="40px" />
        </div>

        {/* Details */}
        <p className="text-gray-700 font-medium mb-2">
          Mega Blog &copy; {new Date().getFullYear()} — All rights reserved
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Contact us:{" "}
          <a
            href="mailto:ayushtyagi1921@gmail.com"
            className="underline text-blue-800 hover:text-blue-600"
          >
            support@megablog.com
          </a>
        </p>

        <p className="text-gray-500 text-sm">Made with 💙 by Ayush</p>
      </div>
    </footer>
  );
}

export default Footer;
