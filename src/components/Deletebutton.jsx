"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDelete } from 'react-icons/md'

export default function DeleteButton( {id} ) {
  const router = useRouter();
  

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        const res = await fetch(`/api/revents/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.ok) {
          const post = await res.json();
          const { publicId } = post;
          await deleteImage(publicId);

          toast.success("Post deleted successfully");
          router.refresh();
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600">
      <MdDelete />
    </button>
  );
}