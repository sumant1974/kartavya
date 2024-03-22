"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";



const page = (slug) => {
    const router = useRouter();
    const CLOUD_NAME = "diechedsa"
    const UPLOAD_PRESET = "kartavya_blog_page"

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [img, setImg] = useState("")
    const [btn, setBtn] = useState("Update")

    const [status, setStatus] = useState(null);


    useEffect(() => {
        async function fetchBlog() {

            const res = await fetch(`/api/members/${slug.params.id}`)

            const post = await res.json()

            setName(post.name)
            setPosition(post.position)

        }
        fetchBlog()
    }, [])

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            let imageUrl = null
            if (img) {
                imageUrl = await uploadImage()
            }

            const body = {
                name,
                position
            }

            if (imageUrl != null) {
                body.img = imageUrl
            }

            const res = await fetch(`/api/members/${slug.params.id}`, {
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
                router.push("/writeall/edit-member");
            } else {
                setStatus("failed");
                throw new Error("Error has occured")
            }



        } catch (error) {
        }
    }

    const uploadImage = async () => {
        if (!img) return

        const formData = new FormData()

        formData.append("file", img)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })

            const data = await res.json()

            const imageUrl = data['secure_url']

            return imageUrl
        } catch (error) {
        }
    }

    return (
        <>
            <main className="min-h-[87vh] flex flex-col justify-center max-w-full items-center m-3 md:mx-40">
                <h1 className="text-4xl">Edit Team Member</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <input
                            type="text"
                            placeholder="name"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] "
                        />
                        <input
                            name="position"
                            id="position"
                            value={position}
                            placeholder="position"
                            onChange={(e) => setPosition(e.target.value)}
                            className="m-3 bg-transparent rounded p-2 md:w-[500px] "
                        ></input>
                        <input
                            type="file"
                            name="img"
                            id="img"
                            onChange={(e) => setImg(e.target.files[0])}
                            accept="image/*"

                            className="md:m-4 file:bg-blue-600 file:m-2 file:border-0 file:text-zinc-50 file:rounded "
                        />
                        <button type="submit" name="btn" className="p-2 bg-sky-600 rounded w-48 hover:scale-105">
                            {btn}
                        </button>
                    </div>
                </form>
                <div className='mt-2 mb-2 text-center'>

                    {status === 'success' && <p className='text-lime-500 m-3'>Member changed successfully!</p>}
                    {status === 'failed' && <p className='text-red-500 m-3'>There was an error updating the member!! Please try again.</p>}
                </div>

            </main>
        </>
    )
}

export default page


