import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <main className="relative flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
      <div id="laptop" className="hidden md:block z-0">
        <div className="fixed top-48 right-[40%]  filter z-0 blur-xl opacity-50 w-60 h-60 rounded-full bg-orange-500 animate-blob "></div>
        <div className="fixed top-[40%] left-[30%]  filter z-0 blur-xl opacity-50 w-96 h-96 rounded-full bg-yellow-400 animate-blob animation-delay-2000"></div>
        <div className="fixed top-28 left-96  filter z-0 blur-xl opacity-50 w-80 h-80 rounded-full bg-purple-600 animate-blob animation-delay-4000"></div>
        <div className="fixed top-72 left-52  filter z-0 blur-xl opacity-50 w-60 h-60 rounded-full bg-lime-400 animate-blob animation-delay-6000"></div>
        <div className="fixed bottom-32 left-[50%]  filter z-0 blur-xl opacity-50 w-72 h-72 rounded-full bg-blue-400 animate-blob animation-delay-8000"></div>
      </div>
      <div id="laptop" className="md:hidden block">
        <div className="fixed top-0 right-[40%]  filter blur-xl opacity-50 w-60 h-60 rounded-full bg-pink-500 animate-blob "></div>
        <div className="fixed bottom-52 left-96  filter blur-xl opacity-50 w-80 h-80 rounded-full bg-purple-600 animate-blob animation-delay-4000"></div>
        <div className="fixed top-52 left-52  filter blur-xl opacity-50 w-60 h-60 rounded-full bg-lime-400 animate-blob animation-delay-6000"></div>
        <div className="fixed bottom-0 -left-[20%]  filter blur-xl opacity-50 w-72 h-72 rounded-full bg-blue-400 animate-blob animation-delay-8000"></div>
      </div>

      <div className="flex flex-col gap-10 my-5 backdrop-blur-sm dark:bg-[#15182079] rounded-lg p-2">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drsrp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-end items-end font-bold">
            <h1 className="text-2xl">
              Smt. S. Panigrahi <br />{" "}
              <span className="text-lg">Chairperson</span>
            </h1>
          </div>
          <div className="border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify"></h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drbb.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-end items-end font-bold">
            <h1 className="text-2xl">
              Dr. B.B. Panigrahi <br />{" "}
              <span className="text-lg">Chief Mentor</span>
            </h1>
          </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-lg font-semibold text-justify dark:text-zinc-50">
              "It is with great pleasure and immense satisfaction that I
              congratulate our KARTAVYA Group who have made all members of
              TRIDENT family very proud of what they have done during the last
              one year under the proactive leadership of their faculty
              coordinator Shri Deepak Mohapatra, Asst.Professor, Department of
              Mechanical Engineering, Trident Academy of Technology. The group
              members are extremely driven and with their sparkling green vests
              they are marked out from a crowd of students being always ready to
              be volunteers in all campus activities. This club has conducted a
              very successful blood donation camp in the campus and the members
              have represented Trident group in plantation drives sponsored by
              the State Government and have been conducting community connects
              every now and then, voluntarily contributing to the cause of the
              poor and the hungry.
              <br />
              <br />
               I am extremely delighted to note that the first Anniversary
              of KARTAVYA Group is being celebrated in the campus on 29th April
              2024. I am sure, they will have bright plans for the coming year
              to work for the common good, contributing to several
              Sustainability Development Goals and targets."
              <br /> <br />
              {""}
              <span className="font-bold text-xl text-center">
                GOD BLESS KARTAVYA AND ITS DEDICATED MEMBERS.
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/drdnp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-end items-end font-bold">
            <h1 className="text-2xl">
              Prof. (Dr) D. N. Pattanayak <br />{" "}
              <span className="text-lg">Principal</span>
            </h1>
          </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-justify dark:text-zinc-50">
              "It is with great pleasure that I write this testimony for the
              KARTAVY club, who has been an exemplary member of our
              institution's social service initiatives, including the National
              Service Scheme (NSS) and sustainability projects .It has
              consistently demonstrated a deep commitment to social welfare and
              environmental sustainability. Through their active participation
              in the NSS, and various sustainability initiatives, they have
              shown exceptional leadership skills and a strong sense of
              responsibility towards the community and the environment.In their
              role, KARTAVYA CLUB has organized and participated in numerous
              social service activities, including blood donation camps,
              cleanliness drives, and awareness campaigns. Their dedication and
              enthusiasm have been instrumental in the success of these
              initiatives, inspiring their peers to actively engage in social
              and environmental causes.Their passion for sustainability and
              social service is evident in their actions, making them a role
              model for their peers and a valuable asset to our institution.
              <br />
              <br />
              {""}I have no doubt that they will continue to excel in their
              endeavors and make a positive impact on society. I wholeheartedly
              recommend them for any future endeavors related to social service,
              sustainability, or community development. "
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-row">
            <div className="relative  border-green-500 rounded-full  w-52 h-52 overflow-hidden flex justify-center">
              <Image
                src="/mrdp.jpg"
                className="object-cover"
                alt="Governing Body"
                width={1000}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-end items-end font-bold">
            <h1 className="text-2xl">
              Mr. Deepak Kumar Mohapatra <br />{" "}
              <span className="text-lg">
                Asst. Professor, Faculty Coordinator
              </span>
            </h1>
          </div>
          <div className=" border-white rounded-lg p-3 md:w-[60vw]">
            <h1 className="text-xl font-semibold text-align-justify text-justify dark:text-zinc-50">
              Welcome to the Kartavya Club!
              <br />
              <br />
              {""}
              "As the coordinator of the Kartavya Club, I am thrilled to extend a
              warm welcome to all members and visitors to our website. <span className="font-bold">KARTAVYA</span>
              club is a community-based organization committed to promoting
              <span className="font-bold">SOCIAL-WELFARE</span> and working towards <span className="font-bold">SUSTAINABILITY</span> for making a
              positive impact in Society and Environment. This group felt the
              urge of giving back to the society and to the mother Earth.
              Through a range of activities such as cleanliness drives, NSS
              Activities, Donation drives, tree planting, awareness campaigns,
              etc, we strive to make a positive impact on our community and
              environment.
              <br />
              <br />
              {""}
              At Kartavya Club, we firmly believe in the power of collective
              action and individual responsibility. By coming together and
              taking concrete steps towards sustainable living and social
              welfare, we can create a brighter, more sustainable future for
              all.
              
              
              {""}
              I encourage you to explore our website to learn more about
              Kartavya Club, our ongoing projects, and how you can get involved.
              Whether you are passionate about, there is a place for you in our
              club.
              <br />
              <br />
              
              {""}
              Thank you for visiting our website. Together, let's continue to
              work towards a more sustainable and compassionate society."
              <br /><br />
              Best regards,
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Governing-Body-Kartavya helping mankind",
  description: "Here is the about page of kartavya",
};
