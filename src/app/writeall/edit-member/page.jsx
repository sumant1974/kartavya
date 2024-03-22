"use client";
import React from 'react'
import Membercon from '../editable_contents/Membercon/page';
const page = () => {
  return (
    <>
        <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
            <h1 className='text-4xl'>Edit team member</h1>
            <Membercon/>
        </main>

    </>
  )
}

export default page
export const runtime = "edge";