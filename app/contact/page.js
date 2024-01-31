import Link from 'next/link';
import '../globals.css';


function page() {
    return (
        <section class="contact_section section bg-[#353535]  font-serif flex justify-center h-screen overflow-y-scroll pb-3" id="contact">
            <div class="container">

                <div className='grid grid-cols-2'>
                    <div className='flex justify-around  items-center'>
                        <a className='logo'>J</a>
                    </div>
                    <div className='flex justify-around  items-center'>
                        <button>
                            <Link href="/menu">
                                <svg width="40px" height="40px" color='white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='hamburger'>
                                    <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                    <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                    <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </Link>
                        </button>

                    </div>
                </div>



                <div class="row">
                    <div class="section_title text-center">
                        <h1 className='text-[#cc3a3b]'>CONTACT</h1>
                        <h2 data_heading="contact" className='text-2xl text-white'>Get In Touch</h2>
                    </div>
                </div>
                <div class="row flex mt-10 justify-around">
                    {/* <!-- contact item start --> */}
                    <div class="contact_item ">
                        <div class="contact_item_inner outer_shadow">

                            <span>Phone</span>
                            <p>+91 7202938543</p>
                        </div>
                    </div>
                    <div class="contact_item ">
                        <div class="contact_item_inner outer_shadow">
                            <i class="fas fa-envelope"></i>
                            <span>Email</span>
                            <p>jaimeenbabariya38@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact_item ">
                        <div class="contact_item_inner outer_shadow">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Address</span>
                            <p>B-23, Vijay Nager, Surat-395010.</p>
                        </div>
                    </div>
                    {/* <!-- contact item end --> */}
                </div>
                <div class="row">
                    <div class="contact_form">
                        <form>
                            <div class="row flex flex-wrap">
                                <div class="w_50">
                                    <div class="input_group  hover_in_shadow">
                                        <input
                                            type="email"
                                            placeholder="Name"
                                            className="input_control"
                                        />
                                    </div>
                                    <div class="input_group  hover_in_shadow">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="input_control"
                                        />
                                    </div>
                                    <div class="input_group  hover_in_shadow">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="input_control"
                                        />
                                    </div>
                                </div>

                                {/* todo: */}
                                <div class="w_50">
                                    <div class="input_group  hover_in_shadow">
                                        <textarea
                                            class="input_control"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="submit_btn">
                                    <button
                                        type="submit"
                                        class="btn_1  hover_in_shadow bottonHome"
                                        onclick="alert('Your Message is Sending...')"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page