"use client"

import Link from 'next/link';
import '../globals.css'
import Image from 'next/image';
import { useState } from 'react';


function Page() {

    const [activeElement, setActiveElement] = useState(0);

    const prevButton = () => {
        setActiveElement((prevElement) => prevElement - 1);
    };

    const nextButton = () => {
        setActiveElement((prevElement) => prevElement + 1);
    };

    return (
        <section className="bg-[#353535] font-serif h-screen overflow-y-scroll" id="portfolio">
            <div className='grid grid-cols-2 mb-10'>
                <div className='flex justify-around  items-center'>
                    <a className='logo'>P</a>
                </div>
                <div className='flex justify-around  items-center'>
                    <button>
                        <Link href="/menu">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger'>
                                <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <h3 className='text-[#cc3a3b]'>TESTIMONIAL</h3>
                <h2 className='text-white text-2xl'>CLIENT SPEAK</h2>
            </div>


            <div className='flex justify-center flex-col items-center mb-10 mt-10' >
                <div className='imageCarousel'>
                    <div className='dot1'></div>
                    <div className='dot2'></div>
                    <div className={`childElement ${activeElement === 0 ? 'active' : ''}`}>
                        <div className='p-8 text-center flex justify-center items-center flex-col childElement'>
                            <p className='text-[#858585]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem ratione cum, neque possimus adipisci ut voluptatem quae officia mollitia veritatis tempora cumque nisi totam, nam voluptatum laboriosam. Illo, harum?</p>
                            {/* <Image src="/" width="40" height="40"></Image> */}
                            <div className='reviewUser w-20 h-20 rounded-full my-3'>
                                <Image src="/man.png" width="100" height="40"></Image>
                            </div>
                            <h2 className='text-white text-2xl'>Raj Himachal</h2>
                        </div>
                    </div>

                    <div className={`childElement ${activeElement === 1 ? 'active' : ''}`}>
                        <div className='hidden childElement'>
                            <p className='text-[#858585]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem ratione cum, neque possimus adipisci ut voluptatem quae officia mollitia veritatis tempora cumque nisi totam, nam voluptatum laboriosam. Illo, harum?</p>
                            {/* <Image src="/" width="40" height="40"></Image> */}
                            <div className='reviewUser w-20 h-20 rounded-full my-3'>
                                <Image src="/man.png" width="100" height="40"></Image>
                            </div>

                            <h2 className='text-white text-2xl'>Soshiv Patel</h2>
                        </div>
                    </div>

                    <div className={`childElement ${activeElement === 2 ? 'active' : ''}`}>
                        <div className='hidden childElement'>
                            <p className='text-[#858585]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem ratione cum, neque possimus adipisci ut voluptatem quae officia mollitia veritatis tempora cumque nisi totam, nam voluptatum laboriosam. Illo, harum?</p>
                            {/* <Image src="/" width="40" height="40"></Image> */}
                            <div className='reviewUser w-20 h-20 rounded-full my-3'>
                                <Image src="/man.png" width="100" height="40"></Image>
                            </div>

                            <h2 className='text-white text-2xl'>Game Star</h2>
                        </div>
                    </div>


                </div>
                <div className='mt-5'>
                    <button className='bottonHome mr-10' onClick={prevButton}>prev</button>
                    <button className='bottonHome' onClick={nextButton}>next</button>
                </div>
            </div>


            {/* carousel */}

        </section>
    );
}

export default Page;
