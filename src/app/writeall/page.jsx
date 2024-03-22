'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


function page() {
    const router = useRouter()

    const logout = async () => {
      try {
          const lout = await fetch('/api/users/logout')
          if(lout.ok)
            router.refresh()
      } catch (error) {
          console.log(error.message);
          toast.error(error.message)
      }
  }


  return (
    <main className="flex flex-col justify-center items-center mt-36 m-3 mb-60">
        <button onClick={logout} className='absolute top-20 right-5 md:right-10 bg-red-600 text-white text-sm lg:text-base text-center px-3 py-2 rounded-md hover:bg-red-700'>Log Out</button>
        <button onClick={() => router.push('/writeall/add_event')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Add New Event</button>
        <button onClick={() => router.push('/writeall/add_member')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Add Member</button>
        <button onClick={() => router.push('/writeall/add_upcoming')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Add Upcoming</button>
        <button onClick={() => router.push('/writeall/edit_event')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Edit Event</button>
        <button onClick={() => router.push('/writeall/edit-member')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Edit Member</button>
        <button onClick={() => router.push('/writeall/edit_upcoming')} className='rounded-xl w-44 bg-[#b1ffb1] dark:bg-slate-600 p-4 hover:scale-110 hover:ease-in-out hover:transition-all m-2'>Edit Upcoming</button>
    </main>
  )
}

export default page