import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <Link href="/" className="text-white text-lg font-semibold hover:underline">
              Home
            </Link>
            <Link href=".\pages\experience" className="text-white text-lg font-semibold hover:underline">
              Experience
            </Link>
            <Link href="./pages/about" className="text-white text-lg font-semibold hover:underline">
              About
            </Link>
            <Link href="./page/contact" className="text-white text-lg font-semibold hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};