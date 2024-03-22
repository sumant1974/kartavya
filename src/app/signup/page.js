"use client"
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function page() {

  const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        isadmin:""
    })
    const [error, setError] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("/api/users/signup", {method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              username: user.username,
              isadmin: user.isadmin
            }),
          })
          if (response.status === 200) {
            router.push("/login");
          }
          if (response.status === 401) {
            setError("Invalid Admin Key");
          }
          if (response.status === 400) {
            setError("User already exists");
          }
            
            
        } catch (error) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);




  return (
    <main className="flex flex-col justify-center items-center min-h-screen m-3 md:mx-40">
      <div className='overflow-hidden relative flex justify-center items-center w-[100%] h-screen'>

        <div className='absolute left-10 -top-10 bg-gradient-to-br w-32 h-32 lg:w-64 lg:h-64 dark:from-lime-600 dark:via-blue-900 dark:to-green-200 from-white to-violet-950 rounded-full'></div>
        <div className='absolute left-96  bg-gradient-to-bl w-16 h-16 lg:w-32 lg:h-32 dark:from-orange-600 dark:to-yellow-400 from-red-400 to-fuchsia-950 rounded-full'></div>
        <div className='absolute right-14 bg-gradient-to-b w-24 h-24 lg:w-52 lg:h-52 from-teal-400 to-violet-700 rounded-full'></div>
        <div className='absolute bottom-[17rem] left-64 w-10 h-10 dark:bg-lime-400 bg-lime-600 rounded-full'></div>
        <div className='absolute flex flex-row justify-around items-center top-16 w-[90%] lg:w-[70%] h-[60%] backdrop-saturate-200 backdrop-blur-sm bg-[#dcdcdc80] dark:bg-[rgba(65,65,81,0.25)] border-[1px] border-white dark:border-gray-500 rounded-xl shadow-5xl'>
          <div className='hidden md:block'><h1 className='text-center text-7xl'>Kartavya</h1> </div>
          <div className=''>
            <form action="">
              <div>
                <h1 className='text-center text-4xl'><span className='text-amber-400'>Sign</span> Up</h1>
              </div>
              <div className='flex flex-col justify-end dark:text-zinc-50'>
                <div className='flex flex-col justify-center'>

                  <label htmlFor="isadmin" className='text-left m-1'>Admin Key <span className='text-red-600'>*</span></label>

                  <input id='isadmin'  value={user.isadmin} onChange={(e) => setUser({...user, isadmin: e.target.value})} type="password" placeholder='Admin Key' className='rounded border-[1px] backdrop-blur-sm p-2 w-64 bg-transparent' />

                  <label htmlFor="username"  className='text-left m-1'>UserID <span className='text-red-600'>*</span></label>

                  <input id='username' type="text" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder='Username' className='rounded border-[1px] backdrop-blur-sm p-2 w-64 bg-transparent' />

                  <label htmlFor="email" className='text-left m-1'>Email <span className='text-red-600'>*</span></label>

                  <input id='email' type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='Email' className='rounded border-[1px] backdrop-blur-sm p-2 w-64 bg-transparent' />

                  <label htmlFor="password" className='text-left m-1'>Password <span className='text-red-600'>*</span></label>

                  <input id='password' type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='Password' className='rounded border-[1px] backdrop-blur-sm p-2 w-64 bg-transparent' />



                  <button onClick={onSignup} className='bg-cyan-400 text-slate-800 font-semibold rounded-3xl m-2 md:ml-12 px-0 py-3 w-40'>{loading?'Processing...':'Submit'}</button>
                  <Link href="/login" className='text-center'>Already have an account?</Link>
                  {error && <div>
                    <h1 className='text-red-500 m-2 text-base text-center'>{error}</h1>
                  </div>}
                  
                </div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </main>
  )
}
