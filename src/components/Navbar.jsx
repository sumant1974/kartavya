'use client'
import Image from "next/image";
import React,{useState} from "react";
import ThemeButton from "./Themebutton";
import Link from "next/link";
import { FaCircleChevronDown } from "react-icons/fa6";
import Menubutton from "./Menubutton";

export default function Navbar() {

  const [isactive, setIsactive] = useState(false);
  const [hide, setHide] = useState(false);
  const active = async () => {
    setIsactive(!isactive);
    setTimeout(() => {
      setHide(!hide);
    }, 200);
    
  }


  return (
    <>
      <div className="top-0 z-50 sticky dark:text-zinc-50">
        <div className="h-16 z-50 top-0 backdrop-saturate-200 backdrop-blur-[6px] shadow-lg flex justify-around md:justify-around items-center">
          <div className="flex justify-center items-center mr-20 md:m-2">
            <Link href="/">
              <Image src="/logo.png" width={40} height={40} alt="/" />
            </Link>
            <Link href="/">
              <span className="m-2 md:text-3xl text-2xl font-bold">
                KARTAVYA
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex justify-center items-center mx-9">
                <Link href="/">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Home
                  </li>
                </Link>
                <Link href="/events">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Events
                  </li>
                </Link>
                <li onClick={active} className="cursor-pointer flex justify-around items-center relative m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                  About <div className={`${isactive?'animate-spin rotate-180':'animate-spinreverse'} ml-2`}><FaCircleChevronDown /></div>
                  <div className={` ${isactive?'transition-all ease-in opacity-100':'transition-all ease-in duration-100 opacity-0'} ${hide?'':'hidden'}`}>
                    <ul className="absolute bg-green-200 dark:bg-slate-950 w-[12vw] left-0 top-11 rounded-lg border-2 border-x-white flex flex-col ">
                      <Link href="/about">
                        <li className="p-3 hover:dark:bg-slate-900 hover:bg-teal-700 rounded-lg">
                          About
                        </li>
                      </Link>
                      <Link href="/governing-body">
                        <li className="p-3 hover:dark:bg-slate-900 hover:bg-teal-700 rounded-lg">
                          Governing Body
                        </li>
                      </Link>
                      <Link href="/core-members">
                        <li className="p-3 hover:dark:bg-slate-900 hover:bg-teal-700 rounded-lg">
                          Core Members
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <Link href="/writeall">
                  <li className="m-2 hover:border-2 hover:scale-1050 hover:border-blue-950 dark:hover:border-green-300 rounded-full px-3 transition-all ease-in-out duration-100">
                    Admin
                  </li>
                </Link>
              </ul>
            </div>

            <div className="md:m-3 flex pt-2 justify-center items-center">
              <div className="p-2">
                <ThemeButton />
              </div>
              <div>
                <div className="focus:bg-none md:hidden p-2">
                  <Menubutton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
