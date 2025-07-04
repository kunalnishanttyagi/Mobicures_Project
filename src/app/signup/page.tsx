"use client";
import React, { useState } from "react";

interface LoginFormState {
  name: string;
  email: string;
  phone: string;
  password: string;
  
}

const Login: React.FC = () => {
  const [form, setForm] = useState<LoginFormState>({
    name: "",
    email: "",
    phone: "",
    password: "",
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send form data to backend for login or registration
    const response = await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log("Response:", response);
    const data=await response.json();
    console.log("Data:", data);
    if(data.success) alert("User created successfully");
    // const data=response.then((res) => res.json());
    // if (data) {
    //   // Handle successful login or registration
    //   console.log("Login successful:", data);
    // } else {
    //   // Handle error
    //   console.error("Login failed:", data);
    // }

    console.log("Form submitted:", form);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className=" text-black text-2xl font-semibold text-center mb-6">Welcome to Mobicures</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border bg-blue-100 text-black  border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 bg-blue-100 text-black py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="mt-1 w-full px-4 py-2 bg-blue-100 text-black  border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-blue-100 text-black  border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
