import Association from '@/components/Association';
import './globals.css'
import Imager from '@/components/Imager'
import Callcontent from '@/components/Callcontent';
import Upcomings from '@/components/Upcomings';



export default async function Home() {

  return (
    <main className="flex flex-col justify-center items-center min-h-full max-w-full m-3 lg:mx-30 md:mx-16 xl:mx-36">


      <Imager />

      <h1 className='my-5 text-6xl dark:text-zinc-50 capitalize font-bold'>Compassion in Action, Unity in Service.</h1>
      <h1 className='text-lg font-medium leading-loose tracking-wide'>KARTAVYA club is a community-based organization committed to promoting SOCIAL-WELFARE and working towards SUSTAINABILITY for making a positive impact in Society  and Environment. This group felt the urge of giving back to the society and to the mother Earth.</h1>
      <br />
      {""}
      <h1 className='text-lg font-medium leading-loose tracking-wide'>Join our vibrant community committed to making a difference through service. Together, we champion kindness, unity, and positive change, extending our reach from local neighborhoods to global initiatives. Whether through volunteering, organizing events, or raising awareness, your participation fuels our mission of creating a brighter world. Let's collaborate to bring joy to hearts and light to lives! Together, we generate a ripple effect of positivity, touching lives near and far, leaving an enduring imprint on those we serve, and inspiring others to join our noble cause.</h1>
      <br />
      <Association />
      <br />
      <div className='flex-col w-full'>
        <h1 className="text-3xl dark:text-zinc-50 md:text-5xl capitalize">Upcoming Activities:</h1>
        <div>
          <Upcomings/>
        </div>
      </div>
      <br />
      <div className='flex-col w-full'>
        <h1 className="text-3xl dark:text-zinc-50 md:text-5xl capitalize">Recent Activities:</h1>
        <div className='flex justify-center'>
          <Callcontent />
        </div>
      </div>

    </main>
  )
}



export const runtime = "edge";