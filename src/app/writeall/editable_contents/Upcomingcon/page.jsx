import React from "react";
import { BiEdit } from 'react-icons/bi'

import Link from "next/link";
import Deleteupcoming from "@/components/Deleteupcoming";

const getData = async () => {
  try {
    const data = await fetch("/api/upcomings", {
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

async function Upcomingcon() {
  const data = await getData();


  return (
    <>


      {
        data?.map((item) => {
          return (<>
            <div className="felx flex-col justify-center items-center my-3 rounded-xl border-2 border-gray-800 dark:border-white w-64 md:w-[50%] p-2 "key={item._id}>

              <div className="">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <h2 className="line-clamp-3">{item.desc}</h2>
                <h2 className="line-clamp-3">{item.venue}</h2>
                <h2 className="line-clamp-3">{item.date}</h2>
                <h2 className="line-clamp-3">{item.month}</h2>
                <h2 className="line-clamp-3">{item.year}</h2>
                <div className="flex justify-evenly items-center">
                  <h1 className="text-red-600 text-xl flex items-center">
                    <Deleteupcoming id={item._id}/>
                  </h1>
                  <Link href={`/writeall/edit_upcoming/${item._id}`} className="text-xl">
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

export default Upcomingcon;
export const runtime = "edge";