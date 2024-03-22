import React from 'react'

import Image from 'next/image'
import { notFound } from 'next/navigation';

const getData = async (params) => {
    try {


        const data = await fetch(`https://kartavya-blog-app.vercel.app/api/revents/${params}`, {
            cache: "no-store"
        });

        if (!data.ok) {
            return notFound();
        }
        const resp = await data.json();
        return resp;
    } catch (error) {
        throw error;
    }
}

const page = async ({ params }) => {

    const data = await getData(params.id);
    
    return (
        <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-40">

            <div className="hidden md:block w-[70vw] min-h-[50vh] mt-5 border-1 border-blue-950 dark:border-[#e7fddd] rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-slate-950">
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl lg:text-4xl dark:text-zinc-50 capitalize'>{data.title}</h1>
                    </div>
                    <div className='p-3 m-2 flex h-[450px] relative'>
                        <Image src={data.img} alt='image' fill className='object-cover rounded-md object-center' />
                    </div>
                <div dangerouslySetInnerHTML={{__html:data?.desc}} className='p-2 w-full mx-3 text-lg leading-relaxed prose dark:prose-invert prose-headings:font-medium prose-h1:3xl prose-h2:2xl:'>
                
                </div>

            </div>

            {/* for mobile */}
            <div className="min-h-[50vh] md:hidden mt-5 border-1 border-blue-950 dark:border-[#e7fddd] rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] dark:shadow-slate-950">

                <div className='p-2'>
                    <h1 className='text-2xl lg:text-4xl dark:text-zinc-50 capitalize'>{data.title}</h1>
                </div>
                <div className='p-2 flex'>
                    <Image src={data.img} width={1000} height={200} alt='image' style={{ objectFit: "contain" }} />
                </div>

                <div dangerouslySetInnerHTML={{__html:data?.desc}} className='p-2 mx-3 leading-6 font-light prose prose-headings:font-semibold prose-headings:text-xl dark:prose-invert'>
                    
                </div>

            </div>
        </main>
    )
}

export default page