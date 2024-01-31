import Image from 'next/image';
import '../globals.css';
import Link from 'next/link';



function page() {
    return (
        // < !--portfolio section start-- >
        <section class="portfolio_section h-screen overflow-y-scroll section bg-[#353535] font-serif flex justify-center" id="portfolio">
            <div class="container">

                <div className='grid grid-cols-2 mb-10'>
                    <div className='flex justify-around  items-center'>
                        <a className='logo'>P</a>
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

                <div class="row">
                    <div class="section_title text-center">
                        <h3 className='text-[#cc3a3b]'>PORTFOLIO</h3>
                        <h2 data_heading="portfolio" className='text-white text-2xl'>Latest Works</h2>
                    </div>
                </div>

                {/* <!-- portfolio filter start --> */}
                <div class="row">
                    <div class="portfolio_filter text-[#808080]">
                        <span class="filter_item  active" data_target="all">All</span>
                        <span class="filter_item" data_target="web_application">Web Application</span>
                        <span class="filter_item" data_target="photoshop">Photoshop</span>
                        <span class="filter_item" data_target="mobile_app">Mobile App</span>
                        <span class="filter_item" data_target="e_commerce">E Commerce</span>
                    </div>
                </div>
                {/* <!-- portfolio filter end -->
            <!-- portfolio items start --> */}
                <div class="row portfolio_items flex flex-wrap">
                    {/* <!-- portfolio item start --> */}
                    {/* <!-- 01 --> */}
                    <div class="portfolio_item" data_category="web_application">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-1.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Personal Portfolio</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>

                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Javascript</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 02 --> */}
                    <div class="portfolio_item" data_category="web_application">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-2.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Wedding Couple</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Jquery</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 03 --> */}
                    <div class="portfolio_item" data_category="e_commerce">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-3.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Product Landing Page</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Boostrap-4</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 04 --> */}
                    <div class="portfolio_item" data_category="web_application">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-4.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Personal Portfolio</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Jquery</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 05 --> */}
                    <div class="portfolio_item" data_category="web_application">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-5.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Fitness & GYM</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Jquery</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 06 --> */}
                    <div class="portfolio_item" data_category="web_application">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-6.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Quiz Application</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>HTML, CSS, Javascript</span></li>
                                            <li>Web - <span><a href="#">www.domain.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 07 --> */}
                    <div class="portfolio_item" data_category="mobile_app">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-7.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Devise Share App</p>
                            {/* <!-- portfolio item details start --> */}
                            <div class="portfolio_item_details">
                                <div class="row">
                                    <div class="description">
                                        <h3>Project Brief:</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore vel molestias! Similique, vitae culpa. Error nobis temporibus tenetur vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores neque libero non repellendus totam.</p>
                                    </div>
                                    <div class="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2020</span></li>
                                            <li>Client - <span>xyz</span></li>
                                            <li>Tools - <span>Java, Android</span></li>
                                            <li>Play Store - <span><a href="#">www.playstore.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>

                    {/* <!-- 08 --> */}
                    <div class="portfolio_item" data_category="photoshop">
                        <div class="portfolio_item_inner ">
                            <div class="portfolio_item_img">
                                <Image src='/project-8.png' width="100" height='100' layout='fit'></Image>
                                {/* <!-- view project btn --> */}
                                <span class="view_project">View Project</span>
                            </div>
                            <p class="portfolio_item_title">Personal Portfolio</p>
                            {/* <!-- portfolio item details start --> */}
                            {/* <!-- <div class="portfolio_item_details">
                            <h3>Sorry!!</h3>
                            <p>This Portfolio item have no data</p>
                        </div> --> */}
                            {/* <!-- portfolio item details end --> */}
                        </div>
                    </div>
                    {/* <!-- portfolio item end --> */}
                </div>
                {/* <!-- portfolio items end --> */}
            </div>
        </section>
    )
}

export default page