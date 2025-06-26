"use client";
import Image from "next/image";
import { ChevronDown, Search, Menu,X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cookies } from "next/headers";

export default function Header() {
  const [showHamburgerOptions, setShowHamburgerOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const tokenExists = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    setIsLoggedIn(!!tokenExists); // true if token exists
  }, []);
  const showHamburgerOptionsfunc = () => {
    console.log("Hamburger menu clicked");
    setShowHamburgerOptions(!showHamburgerOptions);
  }
  return (
    <header className="w-full h-[8vh] bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Mobicures</h1>
            <p className="text-xs text-cyan-600 -mt-1">Fast Reliable Mobicures</p>
          </div>
        </div>

        {/* Nav (hidden on small) */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800">
          {["Mobile Repair", "iPad Repair", "Laptop Repair", "MacBook Repair"].map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer hover:text-cyan-600">
              {item}
              <ChevronDown size={14} className="ml-1" />
            </div>
          ))}
        </nav>

        {/* Search & Sign In (hidden on small) */}

          {
            (isLoggedIn) ? (
              <Link href="/login" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90">
            LOGOUT
          </Link>
            ):(
               <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90">
            SIGN IN
          </Link>
          <Link href="/signup" className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90">
            SIGN UP
          </Link>
        </div>
            )
          }

       

        {/* Hamburger menu (only on small) */}
        <div onClick={showHamburgerOptionsfunc} className="md:hidden">
          <button className="text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>

           <div
        className={`
          fixed top-0 right-0 h-screen w-full bg-white z-[9999]
          transform transition-transform duration-300 ease-in-out
          ${showHamburgerOptions ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={showHamburgerOptionsfunc} className="text-gray-700">
            <X size={28} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-6 space-y-6 text-gray-800 text-lg font-medium">
          {["Mobile Repair", "iPad Repair", "Laptop Repair", "MacBook Repair"].map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-3 hover:text-cyan-600">
              <span>{item}</span>
              <ChevronDown size={16} />
            </div>
          ))}

          <Link href="/login" className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-5 py-3 rounded-full text-base font-semibold hover:opacity-90">
            SIGN IN
          </Link>

          <Link href="/createuser" className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-5 py-3 rounded-full text-base font-semibold hover:opacity-90">
            SIGN UP
          </Link>
        </div>
      </div>

    </header>
  );
}
