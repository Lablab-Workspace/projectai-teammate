"use client";

import React from "react";
import Image from "next/image";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <div className="flex">
          {/* logo */}
          <Image
            src="next.svg"
            alt="logo"
            width={300}
            height={100}
            className="w-44 md:w-56 object-contain pb-10 md:pb-0"
          />
          {/* <h1>AI Work</h1> */}
        </div>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-s-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden>Submit</button>
          </form>

          {/* avatar */}
          <Avatar name="Bright Coder" round size='50' color="#0055D1" />

          {/* <h1>hi</h1> */}
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex items-center text-sm font-litht p-5 pr-5 shodow-xl rounded-sl w-fit bg-white italic max-w-3xl text-[#0055D1] ">
          <UserCircleIcon className="inline-block H-10 w-10 text-[#0055D1] mr-1" />
          GPT IS SUMMARISING YOUR TASKS FOR THE DAY..
        </p>
      </div>
    </header>
  );
}

export default Header;