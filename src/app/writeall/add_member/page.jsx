"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


function page() {

  const CLOUD_NAME = "diechedsa"
  const UPLOAD_PRESET = "kartavya_blog_page"

  const [value, setValue] = useState({
    name: "",
    position: "",
    btn: "Upload",
  });
  const [img, setImg] = useState("")

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage()
      const res = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: value.name,
          position: value.position,
          img: imageUrl,
          }),
      });

      if (res.status === 200) {
        setValue({
          name: "",
          position: "",
          btn: "Uploaded",
        });
        setStatus("success");
        router.push("/writeall");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    }
  };

  const uploadImage = async () => {
    if (!img) {
      return}
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

  const router = useRouter();
  return (
    <main className="min-h-[87vh] flex flex-col justify-center max-w-full items-center m-3 md:mx-40">
      <h1 className="text-4xl">Add A New Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            value={value.name}
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] "
          />
          <input
            name="position"
            id="position"
            value={value.position}
            placeholder="position"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] "
          ></input>
          <input
            type="file"
            name="img"
            id="img"
            onChange={(e)=>setImg(e.target.files[0])}
            accept="image/*"
            
            className="md:m-4 file:bg-blue-600 file:m-2 file:border-0 file:text-zinc-50 file:rounded "
          />
          <button type="submit" name="btn" className="p-2 bg-sky-600 rounded w-48 hover:scale-105">
            {value.btn}
          </button>
        </div>
      </form>
      <div className='mt-2 mb-2 text-center'>

          {status === 'success' && <p className='text-lime-500 m-3'>Member added successfully!</p>}
          {status === 'failed' && <p className='text-red-600 m-3'>There was an error adding the member!! Please try again.</p>}
        </div>
    </main>
  );
}

export default page;
