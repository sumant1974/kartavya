import React from "react";
import Image from "next/image";

export default function Imager() {
  return (
    <div className="flex justify-center items-center rounded-sm">
      <div className="mb-4 md:mb-0 flex justify-center items-center ">
        <div className="relative w-full xl:h-full overflow-hidden bg-fixed ">
          <Image
            src="/kartavya.jpg"
            width={1200}
            height={120}
            alt="/"
            className="rounded-md opacity-100"
          />

          {/* <div
            className="absolute 
                        bottom-0 
                        left-0 
                        right-0 
                        top-0 
                        h-full
                        w-full 
                        overflow-hidden  
                        bg-fixed 
                        opacity-100"
          >
            <div className="flex justify-between my-10  lg:mx-40 lg:my-36">
              <h1 className="text-5xl ml-10 md:text-7xl lg:text-9xl pt-0 px-6 text-white drop-shadow-[0_3.2px_1.2px_rgb(0,0,0)]">We</h1>
              <div className="mr-14 lg:mx-20 md:pt-3">
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-[0_3.2px_1.2px_rgb(0,0,0)]">Aspire</h1>
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-[0_3.2px_1.2px_rgb(0,0,0)]">Inspire</h1>
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-[0_3.2px_1.2px_rgb(0,0,0)]">Empower</h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
