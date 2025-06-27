"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Middler from "@/components/Middler";
import Footer from "@/components/Footer";
// import { cookies } from "next/headers";
export default function Home() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
const [isLoggedIn, setIsLoggedIn] = React.useState(false); // State to track login status
useEffect(() => {
  const token = localStorage.getItem("token");

  if (token && token.length > 10) {
    setIsLoggedIn(true);
    console.log("User is logged in",isLoggedIn);
    console.log(token)
  } else {
    setIsLoggedIn(false);
  }
}, []);
useEffect(() => {
  console.log("✅ isLoggedIn changed to:", isLoggedIn);
}, [isLoggedIn]);
console.log("isLoggedIn mera laddu:", isLoggedIn);
  
  return (
    
    <div className=" bg-white text-black">
      <Navbar status={isLoggedIn} />
      <div className=" h-1  bg-[#494747]" ></div>
      <Header />
      <Middler />
      <Footer />
    </div>



  );
}
