import Link from 'next/link'
import '../globals.css'


function Menu() {
  return (
    <>
      <div className="mx-auto bg-[#353535]  font-serif h-screen overflow-y-scroll">

        <div className='flex flex-col justify-center items-center pt-20'>

          <button className='bottonHome mb-5 mt-5'><Link href="/">Home</Link></button>
          <button className='bottonHome mb-5'><Link href="/about">About</Link></button>
          <button className='bottonHome mb-5'><Link href="/service">Services</Link></button>
          <button className='bottonHome mb-5'><Link href="/portfolio">Portfolio</Link></button>
          <button className='bottonHome mb-5 '><Link href="/testimonial">Testimonial</Link></button>
          <button className='bottonHome mb-5'><Link href="/contact">Contact</Link></button>

        </div>

      </div>
    </>
  )
}

export default Menu