"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useRouter();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigation.replace("/dashboard");
    }
  }, []);

  const handleSubmit = async () => {
    const request = await fetch("http://localhost/API/auth/sign_up.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
      }),
    });

    const response = await request.json();

    if (response.code == 201) {
      toast.success(response.message);
      localStorage.setItem("login", response.user_id);
      navigation.replace("/dashboard");
    } else {
      toast.error(response.message);
    }
    console.log(response);
  };

  return (
    <main className="relative">
      <Image
        src={"/jxB9GUOHTf2.png"}
        width={3000}
        height={3000}
        className="w-full h-[70vh] absolute -z-10 object-cover"
        alt="Logo"
      />

      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-[400px] p-8  space-y-2 rounded-lg">
          <h2 className="text-center text-white font-bold mb-4">
            Create an account
          </h2>
          <input
            type="text"
            className="w-full px-3 bg-[#1e1e1e] py-4 outline-none rounded-lg border border-[#353535]"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            className="w-full px-3 bg-[#1e1e1e] py-4 outline-none rounded-lg border border-[#353535]"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            className="w-full px-3 bg-[#1e1e1e] py-4 outline-none rounded-lg border border-[#353535]"
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="password"
            className="w-full px-3 bg-[#1e1e1e] py-4 outline-none rounded-lg border border-[#353535]"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-[#ffffff] py-4 px-3 rounded-lg text-black font-bold"
          >
            Signup
          </button>

          <p className="text-center text-sm text-gray-500 mb-4">
            Forgot password?
          </p>
          <p className="text-center text-sm text-gray-500 mb-4">
            Already have an account?{" "}
            <Link className="text-white" href={"/"}>
              Login
            </Link>
          </p>
        </div>
      </div>

      <Image
        src={"/qr.png"}
        alt="QR"
        width={200}
        height={200}
        className="w-[200px] absolute right-0 bottom-0 m-5 p-3 hover:scale-110 transition-all duration-500 hidden md:block"
      />
    </main>
  );
};

export default SignUp;
