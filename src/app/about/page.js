import Image from 'next/image'
import React from 'react'



export default function page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-full m-3 lg:mx-30 md:mx-16 xl:mx-36">
      <div className='flex-col tracking-wide'>
        <h1 className='text-5xl dark:text-zinc-50'>About KARTAVYA</h1>

        <div>
          <div className='leading-loose'>

          Kartavya is a compassionate community dedicated to serving society through a range of impactful initiatives. From social outreach programs that support the marginalized to distribution programs providing essential resources, we strive to uplift those in need. Our teaching programs for children in slum areas aim to provide quality education, empowering them with the tools for a brighter future. Additionally, we organize various motivating events that inspire action and foster unity within our community. At Kartavya, we believe in the power of collective action to create meaningful change and build a more inclusive and compassionate world.
            <br />
            <br />

            <h1 className='text-3xl dark:text-zinc-50'>Our Mission</h1>

            Our mission at Kartavya is to cultivate a culture of compassion and service, empowering individuals to make a positive impact on society and the environment. Through our dedicated efforts, we aim to provide essential support to those in need, promote environmental sustainability, and foster community engagement. With a focus on empathy, collaboration, and responsibility, we strive to create a more inclusive, equitable, and resilient world for all.
            <br />
            <br />
            <h1 className='text-3xl dark:text-zinc-50'>What We Do</h1>

            <h1 className='font-semibold dark:text-zinc-500 tracking-widest'>1. A Helping Hand:</h1> KARTAVYA is actively engaged in helping those who are less fortunate. Whether it's through providing food, clothing, or educational support, we stand with those who need assistance the most.

            <h1 className='font-semibold dark:text-zinc-500 tracking-widest'>2. Environmental Stewardship:</h1> We recognize the importance of a sustainable environment. KARTAVYA takes a hands-on approach to environmental conservation through tree planting, clean-up drives, and advocacy for a greener, healthier planet.

            <h1 className='font-semibold dark:text-zinc-500 tracking-widest'>3. Community Engagement:</h1> Our club actively engages with the community, organizing events, workshops, and awareness campaigns to address various social and environmental issues.


            <br />
            <br />
            <h1 className='text-3xl dark:text-zinc-50'>Our Values</h1>

            <h1 className='font-bold dark:text-zinc-500 tracking-widest'>Compassion:</h1> At KARTAVYA, compassion is at the heart of everything we do. We believe in the power of empathy to create positive change.

            <h1 className='font-bold dark:text-zinc-500 tracking-widest'>Unity:</h1> We understand that we can achieve more together. Our club is a diverse and inclusive community where every member's contribution is valued.

            <h1 className='font-bold dark:text-zinc-500 tracking-widest'>Responsibility:</h1> We take our role in society and the environment seriously. KARTAVYA is dedicated to being responsible stewards of our resources and advocating for sustainable practices.

            <br />
            <br />

            <h1 className='text-3xl dark:text-zinc-50'>Get Involved</h1>

            Join us in our mission to make the world a better place. Whether you're passionate about social service, environmental conservation, or both, there's a place for you at KARTAVYA. Together, we can create a more compassionate, sustainable, and resilient world.


          </div>
        </div>
      </div>

      <div className='mt-3'>
        <h1 className='text-3xl text-center dark:text-white'>
          Scan the QR code to join us
        </h1>
        <div className='flex justify-center items-center mt-3'>
          <Image
            src='/qr.png'
            alt='qr code'
            width={300}
            height={300}
            className='rounded-lg'
          />
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  title: 'About-Kartavya helping mankind',
  description: 'Here is the about page of kartavya',
}
export const runtime = "edge";