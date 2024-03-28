import React from "react";

const getData = async () => {
  try {
    const domain=process.env.DOMAIN;
      const data = await fetch(domain+`/api/upcomings`, {
      cache: "no-store",
    });

    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }
    const resp = await data.json();

    return resp;
  } catch (error) {
    throw error;
  }
};

const Upcomings = async () => {
  const data = await getData();
  return (
    <div className="mt-5 grid grid-cols-1 gap-2 justify-center flex-wrap md:grid md:grid-cols-2 md:gap-1 md:justify-center">
      {data && data.length > 0 ? (
        data?.map((item) => {
          return (
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-2 border-[1px] bg-green-200 dark:bg-zinc-800 border-gray-300 dark:border-emerald-950 w-[90vw] md:w-[35vw] lg:w-[30vw] rounded-md p-3">
                <div>
                  <h1 className="text-2xl font-bold capitalize">{item.title}</h1>
                </div>
                <div>
                  <div className="flex font-semibold flex-row justify-between ">
                    <div className="text-gray-900 dark:text-gray-400 font-semibold capitalize">venue: {item.venue}</div>
                    <div className="text-gray-900 dark:text-gray-200 font-semibold capitalize">{item.month} {item.date}, {item.year}</div>
                  </div>
                  <p>{item.desc}</p>
                  {item.link && (
                  <div>
                    <a
                      href={item.link}
                      className="text-blue-500 underline">Click here to join
                    </a>
                  </div>)}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-2 border-[1px] bg-green-200 dark:bg-zinc-800 border-gray-300 dark:border-emerald-950 w-[90vw] md:w-[35vw] lg:w-[30vw] rounded-md p-3">
            Coming Soon...
          </div>
        </div>
      )}
    </div>
  );
};

export default Upcomings;
