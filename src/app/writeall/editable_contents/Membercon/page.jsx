import React from "react";
import { BiEdit } from 'react-icons/bi'

import Link from "next/link";
import Image from "next/image";
import Deletemember from "@/components/Deletemember";

const getData = async () => {
  try {
    const data = await fetch("/api/members", {
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const resp = await data.json();

    const sorted = resp.sort((a, b) => new Date(a.time) - new Date(b.time));
    const res = sorted.reverse();


    return res;
  } catch (error) {
    throw error;
  }
};

async function Membercon() {
  const data = await getData();


  return (
    <>


      {
        data?.map((item) => {
          return (<>
            <div className="felx flex-col justify-center items-center my-3 rounded-xl border-2 border-gray-800 dark:border-white w-64 md:w-[50%] p-2 "key={item._id}>

              <div className="">
                <Image src={item.img} alt="image" width={200} height={10} />
                <h1 className="font-bold text-xl">{item.name}</h1>
                <h2 className="line-clamp-3">{item.position}</h2>
                <div className="flex justify-evenly items-center">
                  <h1 className="text-red-600 text-xl flex items-center">
                    <Deletemember id={item._id}/>
                  </h1>
                  <Link href={`/writeall/edit-member/${item._id}`} className="text-xl">
                    <BiEdit />
                  </Link>
                </div>
              </div>

            </div>
          </>
          )
        }

        )
      }


    </>
  );
}

export default Membercon;
export const runtime = "edge";