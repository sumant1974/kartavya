import React from 'react'

function Updateevent() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen m-3 md:mx-40">
        <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Title"
          className="m-3 bg-transparent text-2xl rounded p-1 md:w-[500px] "
        />
        <textarea
          name="desc"
          id=""
          cols="30"
          rows="10"
          className="m-3 bg-transparent rounded p-2 md:w-[500px] "
          placeholder="write content here"
        ></textarea>
        <input
          type="file"
          className="md:m-4 file:bg-blue-600 file:m-2 file:border-0 file:text-zinc-50 file:rounded "
        />
        <button type="submit" className="p-2 bg-sky-600 rounded w-48 ">
          Update
        </button>
      </div>
    </div>
  )
}

export default Updateevent