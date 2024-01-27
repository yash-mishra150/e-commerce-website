"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [post, setpost] = useState({
    Email: "",
    Password: "",
  });
  const [responce, setresponce] = useState(null);

  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/Login",
          post
        );
        // Update state with the response data
        setresponce(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  });

  const handleSubmit = async (e) => {
    try {
      if (!email || !password) return toast.error("Please fill all fields!");
      console.log(responce[0].PhoneNo);
      if (responce.length == 0)
        return toast.error("Invalid userid or password");
      toast.success("Logged in sucessfully!!");
    } catch (err) {
      toast.error("Something went wrong! Please try again later.");
    }
  };
  const handleChangeEmail = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
    setPassword(e.target.value);
  };
  return (
    <div className="flex justify-center mt-10 px-16 py-16">
      <ToastContainer />
      <div className="card w-full mx-96 my-10 h-[25rem] transition-all duration-[0.2s] relative cursor-pointer hover:rotate-1 hover:scale-[1.04]">
        <div className="circle w-[150px] h-[150px] absolute animate-[move_5s_ease-in_infinite_alternate-reverse] rounded-[50%] bg-gradient-to-t from-[#b0e633] to-[#53ef7d]"></div>
        <div className="circle w-[150px] h-[150px] absolute animate-[move-up6_5s_ease-in_infinite_alternate-reverse] rounded-[50%] bg-gradient-to-t from-[#b0e633] to-[#53ef7d]"></div>
        <div className="card-inner w-[inherit] p-5 px-28 h-[inherit] shadow-[0_0_10px_rgba(0,0,0,0.25)] backdrop-blur-[10px] rounded-3xl bg-[#ffffff0d]">
          <section className="font-Norican font-medium text-5xl text-center text-white">
            Login
          </section>
          <form
            action={handleSubmit}
            className="flex flex-col items-center mt-16 gap-2.5 transition-[0.4s] duration-[ease-in-out] pb-[0.4em] px-[2em] rounded-[25px]"
          >
            <div className="flex">
              <svg
                className="absolute top-[140px] left-[24%] h-[1.5em] w-[1.5em] fill-[white]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                name="Email"
                autoComplete="off"
                id="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Username"
                className="input-field h-10 w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-9 rounded-3xl bg-[#0000] font-poppins outline-none"
                type="text"
              />
            </div>
            <div className="flex mt-3">
              <RiLockPasswordFill className="absolute top-[204px] left-[24%] h-[1.3em] w-[1.3em] fill-[white]" />
              <input
                name="Password"
                autoComplete="off"
                id="password"
                value={password}
                placeholder="Password"
                onChange={handleChangePassword}
                className="input-field h-10 w-[360px] text-[#d3d3d3] border-2 border-solid border-[#d3d3d3] pl-10 rounded-3xl bg-[#0000] font-poppins outline-none"
                type="Password"
              />
            </div>
            <section>
              <ul className="flex gap-36 text-white font-poppins">
                <li>
                  <Link href="/">Sign up</Link>
                </li>
                <li>
                  <Link href="/">Forgot Password?</Link>
                </li>
              </ul>
            </section>
            <button className="Btn my-5 flex items-center justify-start w-[45px] h-[45px] cursor-pointer relative overflow-hidden duration-[0.3s] shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-black rounded-[50%] border-[none] hover:w-[125px] hover:duration-[0.3s] hover:rounded-[40px] active:translate-x-0.5 active:translate-y-0.5">
              <div className="sign w-full duration-[0.3s] flex items-center justify-center">
                <svg viewBox="0 0 512 512" className="w-[17px]">
                  <path
                    className="fill-[white]"
                    d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                  ></path>
                </svg>
              </div>
              <div className="text absolute w-[0%] opacity-0 text-[white] text-[1.2em] font-semibold duration-[0.3s] right-[0%]">
                Login
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
