"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";



const page = (slug) => {
    const router = useRouter();

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [venue, setVenue] = useState("")
    const [month, setMonth] = useState("")
    const [date, setDate] = useState("")
    const [year, setYear] = useState("")
    const [link, setLink] = useState("")
    const [btn, setBtn] = useState("Update")

    const [status, setStatus] = useState(null);


    useEffect(() => {
        async function fetchBlog() {

            const res = await fetch(`/api/upcomings/${slug.params.id}`)

            const post = await res.json()

            setTitle(post.title)
            setDesc(post.desc)
            setVenue(post.venue)
            setMonth(post.month)
            setDate(post.date)
            setYear(post.year)
            setLink(post.link)

        }
        fetchBlog()
    }, [])

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {
                title,
                desc,
                venue,
                month,
                date,
                year,
                link
            }

            const res = await fetch(`/api/upcomings/${slug.params.id}`, {
                headers: {
                    "Content-Type": 'application/json',

                },
                method: "PUT",
                body: JSON.stringify(body)
            })



            if (res.status === 200) {
                const updatedPost = await res.json()
                setStatus("success");
                setBtn("Updated : )")
                router.push("/writeall/edit_upcoming");
            } else {
                setStatus("failed");
                throw new Error("Error has occured")
            }


        } catch (error) {
        }
    }


    return (
        <>
            <main className="min-h-[87vh] flex flex-col justify-center max-w-full items-center m-3 md:mx-40">
                <h1 className="text-4xl">Edit Upcoming Event</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <input
                            type="text"
                            placeholder="title"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] "
                            />
                        <input
                            name="desc"
                            id="desc"
                            value={desc}
                            placeholder="desc"
                            onChange={(e) => setDesc(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                            ></input>
                        <input
                            type="text"
                            name="venue"
                            id="venue"
                            value={venue}
                            placeholder="venue"
                            onChange={(e) => setVenue(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                            ></input>
                        <input
                            type="text"
                            name="month"
                            id="month"
                            value={month}
                            placeholder="month"
                            onChange={(e) => setMonth(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                        ></input>
                        <input
                            type="number"
                            name="date"
                            id="date"
                            value={date}
                            placeholder="date"
                            onChange={(e) => setDate(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                            ></input>
                        <input
                            type="number"
                            name="year"
                            id="year"
                            value={year}
                            placeholder="year"
                            onChange={(e) => setYear(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                        ></input>
                        <input
                            type="text"
                            name="link"
                            id="link"
                            value={link}
                            placeholder="link"
                            onChange={(e) => setLink(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                        ></input>
                        
                        <button type="submit" name="btn" className="p-2 bg-sky-600 rounded w-48 hover:scale-105">
                            {btn}
                        </button>
                    </div>
                </form>
                <div className='mt-2 mb-2 text-center'>

                    {status === 'success' && <p className='text-lime-500 m-3'>Upcoming event changed successfully!</p>}
                    {status === 'failed' && <p className='text-red-500 m-3'>There was an error updating the upcoming event!! Please try again.</p>}
                </div>

            </main>
        </>
    )
}

export default page


