import React from "react";
import playstore from "./play-store.png";
import appstore from "./app-store.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full h-72 bg-black">
      <section className="flex justify-around px-16 pt-16 text-white">
        <div>
          <h4 className=" font-bold font-poppins">Download Our App</h4>
          <p className="font-thin text-[#A9A9A9] text-[12px] font-poppins my-5">
            Download App for Android and ios mobile phone
          </p>
          <div className="flex gap-2 my-5">
            <Image className="h-10 w-32" src={playstore} alt="ImageNA" />
            <Image className="h-10 w-32" src={appstore} alt="ImageNA" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="sitelogo my-4 mr-10 text-5xl font-[Norican]">
            Questy
          </h1>
          <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins my-5">
            Elevating lifestyles through seamless and satisfying online shopping
            experiences.
          </p>
        </div>
        <div className="">
          <ul>
            <li>
              <p className="text-center my-3 font-bold font-poppins">
                Useful Links
              </p>
            </li>
            <li>
              <p className=" font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Coupons
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Trending Items
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Return Policy
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Join Affliate
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {" "}
              <h4 className="font-bold font-poppins text-center my-3">Follow us</h4>
            </li>
            <li>
              <p className=" font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Twitter
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Facebook
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Youtube
              </p>
            </li>
            <li>
              <p className="font-thin text-[#A9A9A9] text-center text-[12px] w-72 font-poppins">
                Instagram
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="h-[1px] items-center mx-36 mt-5 bg-white align-centre" />
      <div className="text-center my-3 text-white" >@ Made By Yash Mishra</div>
    </div>
  );
}

export default Footer;
