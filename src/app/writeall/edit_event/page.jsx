"use client";
import React from 'react'
import Eventcon from '../editable_contents/Eventcon/page'

const page = () => {
  return (
    <>
        <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
            <h1 className='text-4xl'>Edit a post</h1>
            <Eventcon/>
        </main>

    </>
  )
}

export default page
export const runtime = "edge";