import React from 'react'
import './globals.css'
import Link from 'next/link'



function page() {



  return (
    <>

      <div className='bg-[#353535]  font-serif '>

        <div className="container mx-auto relative">
          {/* todo: animation */}
          <div className='circle absolute w-40 h-40 border-[#BF3839] rounded-full top-[-90px] left-2/4'></div>

          {/* todo: animation */}
          <div className='grid grid-cols-2'>
            <div className='flex justify-around  items-center'>
              <a className='logo'>J</a>
            </div>
            <div className='flex justify-around  items-center'>
              <button>
                <Link href="/menu">
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger'>
                    <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </Link>

              </button>

            </div>
          </div>

          <div className='container mx-auto text-white mt-28 pb-16'>
            <div className="grid grid-cols-2 relative">
              {/* todo: animation */}
              <div className='absolute triangle top-[-60px]  left-0'></div>
              <div className='absolute triangle1 top-[-50px] left-0'></div>
              <div className='absolute  bottom-0 increase left-0'></div>

              {/* todo: animation */}
              <div className="flex justify-start flex-col items-center">
                <p className='text-xl mb-5'>Hello</p>
                <h3 className='text-5xl mb-5'>I'm jaimeen</h3>
                <p className='text-xl mb-5'>MERN Stack Developer</p>
                <button className='bottonHome relative'>
                  <div className='absolute square6 grid grid-cols-4 grid-rows-6 gap-1 bottom-[-60px] left-0'>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                    <div className='square5'></div>
                  </div>More About Me</button>
              </div>
              <div className="flex justify-center items-center relative">
                {/* todo: animation */}
                <div className='absolute rounded-full overflow-hidden  h-16 w-16 top-2 right-6 flex flex-col justify-center items-center square1'>
                  <div className='w-2 bg-red-500 h-1'></div>
                  <div className='w-4 bg-red-500 h-1'></div>
                  <div className='w-6 bg-red-500 h-1'></div>
                  <div className='w-8 bg-red-500 h-1'></div>
                  <div className='w-10 bg-red-500 h-1'></div>
                  <div className='w-12 bg-red-500 h-1'></div>
                  <div className='w-14 bg-red-500 h-1'></div>
                  <div className='w-14 bg-red-500 h-1'></div>
                  <div className='w-12 bg-red-500 h-1'></div>
                  <div className='w-10 bg-red-500 h-1'></div>
                  <div className='w-8 bg-red-500 h-1'></div>
                  <div className='w-6 bg-red-500 h-1'></div>
                  <div className='w-4 bg-red-500 h-1'></div>
                  <div className='w-2 bg-red-500 h-1'></div>

                </div>
                <div className='absolute h-9 w-9 border-4 border-indigo-500 bottom-0 right-0 square'></div>

                {/* todo: animation */}
                <div className='myPhoto'>
                  {/* <img src='' alt="my-photo" /> */}
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>

    </>
  )
}

export default page