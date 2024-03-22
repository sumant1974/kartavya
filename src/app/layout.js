import Navbar from '@/components/Navbar'
import './globals.css'
import { REM } from 'next/font/google'
import Provider from '@/components/Provider'
import Footer from '@/components/Footer'


const rem = REM({
  weight: [ '400'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-rem',
  adjustFontFallback: false
})



export const metadata = {
  title: 'Kartavya helping mankind',
  description: 'A non-profit organization that helps people in need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${rem.variable} font-rem`}>
        <Provider>

          <main className='min-h-screen selection:dark:bg-slate-800 selection:bg-green-300 bg-[#efffe7] text-slate-950 dark:bg-gradient-to-tl from-[rgb(4,4,20)] to-[rgb(1,20,21)] dark:text-[#d5e0cf]'>
          <Navbar />
            {children}
          <Footer/>
          </main>
        </Provider>

      </body>

    </html>
  )
}
