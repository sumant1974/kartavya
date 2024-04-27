import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
      <div id="laptop" className="hidden md:block z-0">
        <div className="fixed top-48 right-[40%]  filter z-0 blur-xl opacity-50 w-60 h-60 rounded-full bg-orange-500 animate-blob "></div>
        <div className="fixed top-[40%] left-[30%]  filter z-0 blur-xl opacity-50 w-96 h-96 rounded-full bg-yellow-400 animate-blob animation-delay-2000"></div>
        <div className="fixed top-28 left-96  filter z-0 blur-xl opacity-50 w-80 h-80 rounded-full bg-purple-600 animate-blob animation-delay-4000"></div>
        <div className="fixed top-72 left-52  filter z-0 blur-xl opacity-50 w-60 h-60 rounded-full bg-lime-400 animate-blob animation-delay-6000"></div>
        <div className="fixed bottom-32 left-[50%]  filter z-0 blur-xl opacity-50 w-72 h-72 rounded-full bg-blue-400 animate-blob animation-delay-8000"></div>
      </div>
      <div id="laptop" className="md:hidden block">
        <div className="fixed top-0 right-[40%]  filter blur-xl opacity-50 w-60 h-60 rounded-full bg-pink-500 animate-blob "></div>
        <div className="fixed bottom-52 left-96  filter blur-xl opacity-50 w-80 h-80 rounded-full bg-purple-600 animate-blob animation-delay-4000"></div>
        <div className="fixed top-52 left-52  filter blur-xl opacity-50 w-60 h-60 rounded-full bg-lime-400 animate-blob animation-delay-6000"></div>
        <div className="fixed bottom-0 -left-[20%]  filter blur-xl opacity-50 w-72 h-72 rounded-full bg-blue-400 animate-blob animation-delay-8000"></div>
      </div>

      <div className="flex flex-col gap-10 my-5 backdrop-blur-sm dark:bg-[#15182079] rounded-lg p-2">

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drsrp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
            
          </div>
          <div className="flex justify-end items-end font-bold">
              <h1 className="text-2xl">
                Smt. S. Panigrahi <br /> <span className="text-lg">Chairperson</span>
              </h1>
            </div>
          <div className="border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify">
              
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drbb.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
            
          </div>
          <div className="flex justify-end items-end font-bold">
              <h1 className="text-2xl">
                Dr. B.B. Panigrahi <br /> <span className="text-lg">Chief Mentor</span>
              </h1>
            </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify">
              
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drdnp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
            
          </div>
          <div className="flex justify-end items-end font-bold">
              <h1 className="text-2xl">
                Prof. (Dr) D. N. Pattanayak <br /> <span className="text-lg">Principal</span>
              </h1>
            </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify">
              
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/mrdp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
            
          </div>
          <div className="flex justify-end items-end font-bold">
              <h1 className="text-2xl">
                Mr. Deepak Kumar Mohapatra <br /> <span className="text-lg">Asst. Professor, Faculty Coordinator</span>
              </h1>
            </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify">
              
            </h1>
          </div>
        </div>

      </div>
    </main>
  );
}

export const metadata = {
  title: "Governing-Body-Kartavya helping mankind",
  description: "Here is the about page of kartavya",
};
