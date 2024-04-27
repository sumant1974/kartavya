import React from "react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  try {
    const domain = process.env.DOMAIN;
    const data = await fetch(
      `${domain}/api/revents`,
      {
        cache: "no-store",
      }
    );
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

export default async function page() {
  const data = await getData();

  return (
    <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
      <div className="flex flex-col">
        <div className="p-2">
          <h1 className="text-3xl md:text-5xl capitalize">
            Recent Activities:
          </h1>
          {data?.map((item) => (
            <div key={item._id}>
              <div className="relative mt-5 lg:max-w-full border-[1px] border-gray-300 dark:border-emerald-950 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-slate-800">
                <div className="p-2">
                  <Link href={`/events/${item._id}`}>
                    <h1 className="text-2xl lg:text-4xl dark:text-zinc-50 capitalize hover:text-green-500">
                      {item.title}
                    </h1>

                    <div className="p-2 mt-2 flex justify-center bg-cover overflow-hidden">
                      <Image
                        src={item.img}
                        className="hover:scale-110 duration-300 transition ease-in-out"
                        width={900}
                        height={1000}
                        alt="image"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className="absolute p-1 rounded-md dark:bg-[#21312fa4] bg-[#bef1eba4] bottom-5 xl:bottom-10 xl:mx-40 mx-7 prose dark:prose-invert line-clamp-2 prose-headings:text-base"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Events-Kartavya helping mankind",
  description: "we help to grow",
};
export const runtime = "edge";

{
  /* <Link href={`/events/${item._id}`}></Link> */
}
