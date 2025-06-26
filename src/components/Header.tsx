"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
const devices = [
  {
    name: "Mobile Repair",
    src: "https://image01-in.oneplus.net/media/202406/19/ec64eb41a8e787a798be1b71c13a51bb.png?x-amz-process=image/format,webp/quality,Q_80",
  },
  {
    name: "iPad Repair",
    src: "https://i.pinimg.com/736x/1a/e3/b3/1ae3b3bcf0dce223c0f8a987f22c1c1f.jpg",
  },
  {
    name: "Apple Watch Repair",
    src: "https://i.pinimg.com/736x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg",
  },
  {
    name: "MacBook Repair",
    src: "https://i.pinimg.com/736x/eb/b3/5d/ebb35d9572ffff815578498fcf59cbbb.jpg",
  },
  {
    name: "Tablet Repair",
    src: "https://i.pinimg.com/736x/38/25/45/382545c1ad207592a40956808ae3c1e5.jpg",
  },
  {
    name: "Tempered Glass",
    src: "https://i.pinimg.com/736x/74/63/bb/7463bb5260270fd6b1244392735bd631.jpg",
  },
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    deviceType: "",
    brand: "",
    // model: "",
    fault: "",
    city: "",
  });
   const sendMail =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ Prevent page reloadt
    console.log("Form submitted with data:", formData);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      else {
        const data = await response.json();
        console.log("Email sent successfully:", data);
      }
    }
    catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your request. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("Form data updated:", { ...formData, [name]: value });
  };
  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-[92vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* <div className="absolute z-10 inset-0 bg-[url('/background.jpg')] h-full w-full bg-cover bg-center opacity-30"></div> */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Side - Device Grid */}
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold mb-2 text-white">Doorstep</h1>
          <p className="text-lg mb-6 text-gray-300">
            Certified Technicians. Quality Parts. <br /> Right at Your Door.
          </p>

          <h2 className="text-xl font-semibold mb-4 relative inline-block after:block after:w-12 after:h-[2px] after:bg-white after:mt-1 mx-auto">
            Select Your Device
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {devices.map((device, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 transition"
              >
                <Image
                  src={device.src}
                  alt={device.name}
                  width={70}
                  height={70}
                />
                <p className="mt-3 font-semibold text-center">{device.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full lg:w-[420px]">
          <h3 className="text-xl font-bold text-center">Book Now</h3>
          {/* <p className="text-center font-medium text-sm text-gray-700 border-b-2 border-red-500 inline-block mt-1 mb-4">
    For Doorstep Repair Service
  </p> */}

          <form onSubmit={sendMail} className="space-y-3">
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-input w-full rounded border px-3 py-2 bg-gray-100"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone No.
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="form-input w-full rounded border px-3 py-2 bg-gray-100"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-input w-full rounded border px-3 py-2 bg-gray-100"
              />
            </div>

            <div className="flex gap-2">
              <div className="w-full">
                <label
                  htmlFor="deviceType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Device
                </label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className="form-select w-full bg-gray-100 border px-3 py-2 rounded"
                >
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                  <option value="smartwatch">Smartwatch</option>
                  <option value="tv">Smart TV</option>
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="form-select w-full bg-gray-100 border px-3 py-2 rounded"
                >
                  <optgroup label="Mobile">
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Realme">Realme</option>
                    <option value="Redmi">Redmi</option>
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Nothing">Nothing</option>
                    <option value="Infinix">Infinix</option>
                    <option value="Micromax">Micromax</option>
                    <option value="iQOO">iQOO</option>
                  </optgroup>
                  <optgroup label="Laptop">
                    <option value="HP">HP</option>
                    <option value="Dell">Dell</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Apple MacBook">Apple MacBook</option>
                    <option value="MSI">MSI</option>
                    <option value="Samsung Laptops">Samsung</option>
                  </optgroup>
                  <optgroup label="TV">
                    <option value="Sony">Sony</option>
                    <option value="LG">LG</option>
                    <option value="TCL">TCL</option>
                    <option value="Vu">Vu</option>
                    <option value="Mi TV">Mi</option>
                    <option value="OnePlus TV">OnePlus</option>
                    <option value="Samsung TV">Samsung</option>
                  </optgroup>
                  <optgroup label="Tablet/Smartwatch">
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Realme">Realme</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Fossil">Fossil</option>
                    <option value="Boat">Boat</option>
                    <option value="Noise">Noise</option>
                    <option value="Fire-Boltt">Fire-Boltt</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* <input
      name="model"
      value={formData.model}
      onChange={handleChange}
      type="text"
      placeholder="Enter device model"
      className="form-input w-full bg-gray-100 border px-3 py-2 rounded"
    /> */}

            <input
              name="fault"
              value={formData.fault}
              onChange={handleChange}
              type="text"
              placeholder="Enter device faults"
              className="form-input w-full bg-gray-100 border px-3 py-2 rounded"
            />

            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select City & Area
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-select w-full bg-gray-100 border px-3 py-2 rounded"
            >
              <optgroup label="Delhi">
                <option value="East Delhi">East Delhi</option>
                <option value="South Delhi">South Delhi</option>
                <option value="West Delhi">West Delhi</option>
                <option value="North Delhi">North Delhi</option>
                <option value="Central Delhi">Central Delhi</option>
              </optgroup>
              <optgroup label="Ghaziabad">
                <option value="Vaishali">Vaishali</option>
                <option value="Indirapuram">Indirapuram</option>
                <option value="Dasna">Dasna</option>
                <option value="Raj Nagar">Raj Nagar</option>
                <option value="Vasundhara">Vasundhara</option>
              </optgroup>
              <optgroup label="Noida / Greater Noida">
                <option value="Noida Sector 62">Noida Sector 62</option>
                <option value="Noida Sector 18">Noida Sector 18</option>
                <option value="Greater Noida West">Greater Noida West</option>
                <option value="Pari Chowk">Pari Chowk</option>
              </optgroup>
              <optgroup label="Gurugram">
                <option value="MG Road">MG Road</option>
                <option value="DLF Phase 1">DLF Phase 1</option>
                <option value="DLF Phase 2">DLF Phase 2</option>
                <option value="Sohna Road">Sohna Road</option>
                <option value="Sector 56">Sector 56</option>
              </optgroup>
              <optgroup label="Faridabad">
                <option value="NIT Faridabad">NIT Faridabad</option>
                <option value="Sector 15">Sector 15</option>
                <option value="Sector 21C">Sector 21C</option>
                <option value="Ballabgarh">Ballabgarh</option>
              </optgroup>
            </select>

            <div className="text-sm text-gray-700 space-y-1 mt-2">
              <div className="flex items-center gap-2 text-red-600">
                <span>✔️</span> <span>Doorstep Repair</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <span>✔️</span> <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <span>✔️</span> <span>10 Years of Trusted Service</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded text-lg mt-2 hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/your_number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
      </a>
    </section>
  );
}
