"use client";

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Menubutton() {
  const [sidebar, setSidebar] = useState(false);
  const toggleShow = () => {
    setTimeout(() => {
      setSidebar(!sidebar);
    }, 300);
    
  };


  return (
    <div>
      <button className="text-xl" onClick={toggleShow}>
        <BsThreeDotsVertical />
      </button>
      <div
        className={`${
          !sidebar ? "hidden" : "transition-opacity opacity-100"
        } absolute flex flex-col justify-center bg-[#04081ddc] text-[#e7fddd] items-center top-0 right-0 w-[30vh] h-[60vh] rounded-xl`}
      >
        <span onClick={toggleShow} className="absolute top-3 right-5 text-xl">
          <AiOutlineClose />
        </span>

        <ul className="flex-col top-10 text-xl w-full">
          
            <Link href="/" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">Home</li></Link>
            <Link href="/events" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">Events</li></Link>
            <Link href="/about" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">About</li></Link>
            <Link href="/governing-body" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">Governing Body</li></Link>
            <Link href="/core-members" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">Core Members</li></Link>
            <Link href="/writeall" onClick={toggleShow}><li className="m-4 py-2 rounded-md hover:text-gray-800 active:dark:bg-slate-400 active:bg-lime-400 text-center">Admin</li></Link>
            
          
        </ul>
      </div>
    </div>
  );
}
