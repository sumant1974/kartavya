"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


function page() {

  const [value, setValue] = useState({
    title: "",
    desc: "",
    venue: "",
    date: "",
    month: "",
    year: "",
    link:"",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);
      const res = await fetch("/api/upcomings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: value.title,
          desc: value.desc,
          venue: value.venue,
          month: value.month,
          date: value.day,
          year: value.year,
          link: value.link,
          }),
      });

      if (res.status === 200) {
        setValue({
            title: "",
            desc: "",
            venue: "",
            date: "",
            month: "",
            year: "",
            link:"",
        });
        setStatus("success");
        router.push("/writeall");
      } else {
        setStatus("failed");
      }
    } catch (err) {
      setStatus(err.message);
    }
    finally{
        setLoading(false);
    }
  };

  

  const router = useRouter();
  return (
    <main className="min-h-[87vh] flex flex-col justify-center max-w-full items-center m-3 md:mx-40">
      <h1 className="text-4xl">Add Upcoming event</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <input
            type="text"
            name="title"
            id="title"
            value={value.title}
            placeholder="Title"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          />
          <input
            type="text"
            name="desc"
            id="desc"
            value={value.desc}
            placeholder="Desc"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          ></input>
          <input
            type="text"
            name="venue"
            id="venue"
            value={value.venue}
            placeholder="Venue"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          ></input>
          <input
            type="text"
            name="month"
            id="month"
            value={value.month}
            placeholder="Month eg. Jan or Feb"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          ></input>
          <input
            type="number"
            name="day"
            id="day"
            value={value.day}
            placeholder="Day eg. 20"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
            ></input>
          <input
            type="number"
            name="year"
            id="year"
            value={value.year}
            placeholder="Year eg. 2023"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          ></input>
          <input
            type="url"
            name="link"
            id="link"
            value={value.link}
            placeholder="Paste link here"
            onChange={handleChange}
            className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] border-2 border-gray-600"
          ></input>

          <button type="submit" name="btn" className="p-2 bg-sky-600 rounded w-48 hover:scale-105">
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
      <div className='mt-2 mb-2 text-center'>

          {status === 'success' && <p className='text-lime-500 m-3'>Upcoming event added successfully!</p>}
          {status === 'failed' && <p className='text-red-600 m-3'>There was an error adding the upcoming event!! Please try again.</p>}
        </div>
    </main>
  );
}

export default page;
