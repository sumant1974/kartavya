import Image from "next/image";
import React from "react";

function Association() {
  return (
    <div className="felx items-center w-[95%] justify-center overflow-hidden">
      <div className="felx text-center">
        <h1 className="text-2xl">In Association with:</h1>
      </div>

      <div className="flex flex-row">
        <div className="animate-marquee w-fit">
          <div className="flex flex-row">
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/nssulogo.png" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/sdg.jpg" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/redcross.jpg" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/rbh.jpg" fill className="object-contain" alt="img" />
            </div>
            
          </div>
        </div>
        <div className="animate-marquee w-fit">
          <div className="flex flex-row">
          <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/nssulogo.png" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/sdg.jpg" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/redcross.jpg" fill className="object-contain" alt="img" />
            </div>
            <div className="relative w-[200px] md:w-[300px] h-[100px] md:h-[150px] flex justify-center items-center rounded-md shadow-sm shadow-slate-500 bg-white dark:bg-slate-900 p-2 m-3">
              {" "}
              <Image src="/rbh.jpg" fill className="object-contain" alt="img" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Association;
