import Image from "next/image";
import Link from "next/link";
import React from "react";



export default async function Content(item) {
  const { _id, title, desc, img, time } = item;
  return (
    <div className="flex flex-col">
      <div className="p-2">
        {/* for mobile */}
        <div key={_id}
          className=" min-h-[50vh] md:hidden mt-5 border-[1px] border-gray-300 dark:border-emerald-950 rounded-lg shadow-xl"
        >
          <div className="p-2">
            <h1 className="text-2xl dark:text-zinc-50 capitalize">{title}</h1>
          </div>
          <div className="p-2 flex justify-center">
            <Link href={`/events/${_id}`}>
              <Image src={img} width={1000} height={1000} alt="image" />
            </Link>
          </div>
          <div dangerouslySetInnerHTML={{__html:desc}} className="p-2 leading-loose line-clamp-4 md:line-clamp-none normal-case">
            
          </div>
        </div>

        {/* for laptop */}
        <div className="hidden md:flex flex-row">
          <div className="hidden normal-case md:grid md:grid-cols-2 w-[36vw] h-[250px] mt-3 m-3 border-[1px] border-gray-300 dark:border-emerald-950 rounded-lg shadow-5xl ">
            <div className="relative flex flex-col p-2">
              <h1 className="text-2xl line-clamp-2 dark:text-zinc-50 capitalize">{title}</h1>
              <div dangerouslySetInnerHTML={{__html:desc}} className="p-2 leading-loose line-clamp-4 normal-case prose dark:prose-invert prose-h1:text-lg prose-h2:text-lg"></div>
              {/* <h1 className="absolute bottom-0">{time.substring(0, 10)}</h1> */}
            </div>
            <Link href={`/events/${_id}`} className="p-2 flex justify-center">
                <Image
                  src={img}
                  width={300}
                  height={300}
                  alt="image"
                  className="object-cover"
                />
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}
