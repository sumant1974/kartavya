"use client";
import React from 'react'
import Upcomingcon from '../editable_contents/Upcomingcon/page';
const page = () => {
  return (
    <>
        <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
            <h1 className='text-4xl'>Edit Upcoming Event</h1>
            <Upcomingcon/>
        </main>

    </>
  )
}

export default page

export const runtime = "edge";