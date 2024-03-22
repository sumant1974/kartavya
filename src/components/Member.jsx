import Image from 'next/image'
import React from 'react'

const getData = async () => {
  try {
    const data = await fetch(`https://kartavya-blog-app.vercel.app/api/members`, {
      cache: "no-store"
    });

    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const resp = await data.json();

    return resp;
  } catch (error) {
    throw error;
  }
};

async function Member() {
  const data = await getData();
  return (
    <div className='grid-cols-2 lg:grid-cols-3 gap-4 grid'>
      {
        data && data.length > 0 ? (
        data?.map((item) => {
          return(
            
          <div className='md:w-[43vw] lg:w-[23vw] xl:w-[23vw] w-[43vw] h-[30vh] md:h-[52vh] lg:h-[60vh] shadow-xl dark:shadow-slate-950 border-[1px] border-gray-300 dark:border-emerald-950 backdrop-blur-sm flex flex-col gap-5 justify-center items-center rounded-xl mb-5'>
            <div className='relative rounded-t-full rounded-r-full  w-32 h-32 m-2 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 overflow-hidden flex justify-center items-start'>
              <Image src={item.img} fill alt='member' className='object-cover object-top' />
            </div>
            <div className='felx flex-col items-center justify-center'>
              <div><h1 className='text-base m-1 md:text-2xl font-normal md:font-medium text-black dark:text-zinc-50 capitalize text-center'>{item.name}</h1></div>
              <div><h1 className='text-sm m-1 md:text-xl font-light md:font-normal text-slate-700 dark:text-zinc-400 capitalize text-center'>{item.position}</h1></div>
            </div>

          </div>
          )
        })):null
      }
    </div>
  )
}

export default Member