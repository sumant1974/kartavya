import React from 'react'
import Content from './content/page';

const getData = async () => {
    try {
      const data = await fetch(`https://kartavya-blog-app.vercel.app/api/revents`, {

        cache: "no-store"
      });
      
      if (data.statusText !== 'OK') {
        throw new Error("Failed to fetch data");
      }
      const resp = await data.json();
      
      const sorted = resp.sort((a, b) => new Date(a.time) - new Date(b.time));
      const rev = sorted.reverse();
      const res = rev.slice(0,10);
      return res;
    } catch (error) {
      throw error;
    }
  };

export default async function Callcontent() {
  const data = await getData();
  return (
    <div className='flex flex-wrap md:grid md:grid-cols-2 md:gap-3 md:justify-between'>
        {
            data?.map((item) => {
              return <Content key={item._id} {...item} />
            })
          }
    </div>
  )
}
