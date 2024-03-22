import Member from "@/components/Member";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
      

      <div className="mt-3">
        <h1 className="text-3xl text-center dark:text-white">
          Scan the QR code to join us
        </h1>
        <div className="flex justify-center items-center mt-3">
          <Image
            src="/qr.png"
            alt="qr code"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <div>
        <br></br>
        <hr className="border-gray-800 w-full" />
        <br></br>
        <div className="text-5xl text-center dark:text-white">Our Team</div>
        <br></br>
        <div>
          Join us in our mission to make the world a better place. Whether
          you're passionate about social service, environmental conservation, or
          both, there's a place for you at KARTAVYA. Together, we can create a
          more compassionate, sustainable, and resilient world.
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center items-center">
          <Member />
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "About-Kartavya helping mankind",
  description: "Here is the about page of kartavya",
};
export const runtime = "edge";
