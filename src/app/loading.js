'use client'
import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className='min-h-[87vh] flex justify-center items-center text-3xl'>
      <div>
        <Oval
          height={80}
          width={80}
          color="#00FF0C"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}

        />
      </div>
    </div>
  )
}
