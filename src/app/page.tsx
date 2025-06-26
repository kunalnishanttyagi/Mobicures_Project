import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Middler from "@/components/Middler";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    
    <div className=" bg-white text-black">
      <Navbar />
      <div className=" h-1  bg-[#494747]" ></div>
      <Header />
      <Middler />
      <Footer />
    </div>



  );
}
