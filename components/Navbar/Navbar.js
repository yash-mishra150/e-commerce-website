import React from "react";
import Link from "next/link";
import Image from "next/image";
import hacker from "./hacker.gif";
import Shopping_Cart from "./icons8-shopping-cart.gif";

const Navbar = () => {
  return (
    <nav class="container flex justify-around">
      <div class="header3 w-[100%] h-[60px] mb-[40px] text-white">
        <ul class="menu3 h-[100%] w-[100%] flex items-center">
          <li>
            <section className="siteLogo my-4 mr-10 text-4xl font-Norican">
              Questy
            </section>
          </li>
          <section className="flex items-center">
            <li>
              <Link href="/Products">Products</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
          </section>
          <li className="ml-96 space-x-1">
            <input
              placeholder="Search"
              className="text-black p-4 h-9  rounded-2xl"
            />{" "}
            <button class="h-9 w-20 text-white rounded-3xl bg-red-500 hover:bg-red-600 ">
              Go
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
