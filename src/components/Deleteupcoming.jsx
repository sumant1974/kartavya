"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDelete } from 'react-icons/md'

export default function Deleteupcoming( {id} ) {
  const router = useRouter();
  

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        const res = await fetch(`/api/upcomings/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) {
          router.refresh();
        }
      } catch (error) {
      }
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600">
      <MdDelete />
    </button>
  );
}