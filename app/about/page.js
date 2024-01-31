import React from 'react'
import '../globals.css';
import Link from 'next/link';


function about() {
  return (
    <div className='bg-[#353535]  font-serif h-screen overflow-y-scroll'>
      <div className="container mx-auto ">
        <div className='grid grid-cols-2'>
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

        {/* todo */}
        <div className="grid grid-cols-2 mt-20">
          <div className='flex justify-center items-center flex-col'>
            <div className='photoAbout'>

            </div>
            <div className='mt-10 flex'>
              <button className='socialMedia mr-5 flex justify-center items-center'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="25" height="25" viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M502 2686 c-93 -30 -160 -99 -188 -192 -32 -109 -8 -202 75 -285 70
-69 140 -95 228 -85 193 23 310 224 234 402 -57 131 -215 203 -349 160z"/>
                    <path d="M2000 1934 c-141 -28 -282 -117 -354 -224 -15 -23 -16 -20 -16 83 l0
107 -240 0 -240 0 0 -800 0 -800 249 0 250 0 3 488 c3 474 4 488 25 540 50
123 129 176 263 176 128 0 202 -53 242 -174 8 -24 14 -190 17 -530 l6 -495
248 -3 248 -2 -4 557 c-3 520 -5 564 -24 650 -50 221 -162 350 -353 408 -54
16 -268 29 -320 19z"/>
                    <path d="M340 1100 l0 -800 250 0 250 0 0 800 0 800 -250 0 -250 0 0 -800z" />
                  </g>
                </svg>
              </button>
              <button className='socialMedia mr-5 flex justify-center items-center'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="25" height="25" viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M1715 2986 c-265 -52 -437 -208 -505 -461 -19 -69 -22 -116 -27 -352
l-6 -273 -228 0 -229 0 0 -265 0 -265 230 0 230 0 0 -685 0 -685 275 0 275 0
0 685 0 685 230 0 c127 0 230 2 230 5 0 2 6 51 14 107 8 57 22 159 31 228 9
69 18 140 21 158 l5 32 -267 0 -266 0 4 223 c5 240 9 261 61 315 49 51 103 62
309 62 l178 0 0 239 0 238 -57 7 c-131 14 -437 16 -508 2z"/>
                  </g>
                </svg>
              </button>
              <button className='socialMedia flex justify-center items-center'>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="25" height="25" viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M860 2989 c-361 -23 -615 -175 -745 -444 -52 -107 -80 -212 -94 -354
-14 -135 -14 -1256 -1 -1390 28 -269 132 -475 308 -611 144 -112 307 -164 561
-180 202 -13 1030 -13 1232 0 336 21 540 114 694 315 102 132 156 282 175 484
14 147 13 1272 -1 1403 -28 256 -128 455 -296 589 -149 119 -308 171 -570 188
-180 13 -1076 12 -1263 0z m1190 -269 c280 -14 388 -48 506 -162 72 -69 123
-163 148 -273 42 -178 43 -1383 2 -1568 -47 -213 -183 -356 -392 -411 -109
-29 -363 -38 -934 -33 -618 6 -657 10 -796 77 -135 65 -229 183 -269 337 -30
115 -37 298 -32 909 4 515 7 609 21 674 52 229 189 370 411 425 39 10 138 20
225 25 229 10 897 11 1110 0z"/>
                    <path d="M2235 2466 c-116 -52 -142 -218 -47 -298 76 -64 171 -62 238 6 70 70
78 160 21 240 -40 56 -144 82 -212 52z"/>
                    <path d="M1372 2260 c-365 -66 -632 -384 -633 -755 0 -129 21 -227 76 -340 76
-158 203 -285 360 -360 96 -46 173 -65 290 -72 365 -21 692 218 787 576 28
106 28 277 -1 384 -24 93 -84 210 -146 289 -92 117 -254 224 -400 263 -72 19
-259 28 -333 15z m301 -290 c222 -83 354 -299 326 -533 -28 -234 -222 -418
-459 -434 -95 -7 -171 9 -260 53 -118 59 -201 155 -247 284 -32 92 -32 229 1
322 57 160 189 281 354 323 78 20 210 13 285 -15z"/>
                  </g>
                </svg>

              </button>
            </div>
          </div>

          <div className='text-white'>
            <div>

              <h3>Main Info</h3>
              <h1 className='text-[#cc3a3b] mb-10'>ABOUT ME</h1>
              <div className='mb-10'>
                <p><span>Hi! My name is jaimeen. I am a MERN Stack Devloper. </span>I am a skilled MERN stack developer at WebApster. With expertise in both front-end and back-end technologies, I have a comprehensive understanding of full-stack development. </p>
                <p>I thrive in collaborative environments, delivering scalable and efficient web applications. If you're looking for a passionate developer who can bring your ideas to life, let's connect and create something amazing together.</p>
              </div>
              <div>
                <button className='bottonHome mr-10'>Download CV</button>
                <button className='bottonHome'>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
        {/* todo: skill and experince */}
        <div className='mt-20'>
          <div className='flex  justify-center items-center'>
            <h1 className='bottonHome mr-10'>Skills</h1>
          </div>

          <div>

            <div class="skill_item mt-5">
              <p className='text-white'>Html</p>
              <div class="progress">
                <div class="progress_bar" style={{ width: "calc(90% - 14px)" }}>
                  <span>90%</span></div>
              </div>
            </div>

            <div class="skill_item">
              <p>CSS</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(90% - 14px)" }}>
                  <span>90%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>Boostrap</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(70% - 14px)" }}>
                  <span>70%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>Tailwind</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(80% - 14px)" }}>
                  <span>80%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>Javascript</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(90% - 14px)" }}>
                  <span>90%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>React</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(100% - 14px)" }}>
                  <span>100%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>Redux</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(90% - 14px)" }}>
                  <span>90%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>Node.js</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(80% - 14px)" }}>
                  <span>80%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>THREE.JS</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(90% - 14px)" }}>
                  <span>90%</span></div>
              </div>
            </div>
            <div class="skill_item">
              <p>XEOKIT</p>
              <div class="progress ">
                <div class="progress_bar" style={{ width: "calc(70% - 14px)" }}>
                  <span>70%</span></div>
              </div>
            </div>

          </div>

          {/* todo: experience */}
          <div className='flex  justify-center items-center mb-10'>
            <h1 className='bottonHome mr-10'>Experience</h1>
          </div>

          <div className="row">
            <div className="experience tab_content">
              <div className="row">
                <div className="timeline">
                  <div className="row text-2xl">
                    {/* <!-- timeline item start --> */}
                    <div className="timeline_item">
                      <div className="timeline_item_inner ">
                        {/* <i className="fas fa-briefcase icon"></i> */}
                        <span className='text-[#cc3a3b] text-right'>Feb, 2022 - Present</span>
                        <h3 className='text-2xl font-bold my-5'>Full Stack Devloper</h3>
                        <h4 className='my-4 italic'>WebApster, india.</h4>
                        <p className='text-gray-500 text-lg'>I'm an experienced full-stack developer with a proven track record of delivering end-to-end web solutions. From backend development to frontend implementation, I possess a comprehensive skill set across the entire development stack. With a focus on scalability and efficiency, I consistently deliver high-quality applications that meet client requirements.</p>
                      </div>
                    </div>
                    <div className='dottedLine'></div>
                    <div className="timeline_item flex justify-end mt-10 mb-10">
                      <div className="timeline_item_inner ">
                        {/* <i className="fas fa-briefcase icon"></i> */}
                        <span className='text-[#cc3a3b] text-right'>Sep, 2021 - Jan, 2022</span>
                        <h3 className='text-2xl font-bold my-5'>THREE.JS Designer</h3>
                        <h4 className='my-4 italic'>WebApster, india.</h4>
                        <p className='text-gray-500 text-lg'>With expertise in Three.js and Xeokit, I am a skilled 3D model design developer. I have a strong background in creating immersive and interactive experiences using these powerful frameworks. Leveraging my knowledge, I have successfully delivered visually stunning and engaging 3D models that captivate users.</p>
                      </div>
                    </div>
                    <div className="timeline_item pb-10">
                      <div className="timeline_item_inner ">
                        {/* <i className="fas fa-briefcase icon"></i> */}
                        <span className='text-[#cc3a3b] text-right'>Jan, 2021 - Sep, 2021</span>
                        <h3 className='text-2xl font-bold my-5'>Web Designer</h3>
                        <h4 className='my-4 italic'>WebApster, india.</h4>
                        <p className='text-gray-500 text-lg'>As a dedicated front-end developer, I have honed my skills in creating visually appealing and intuitive user interfaces. With expertise in HTML, CSS, and JavaScript, I have successfully transformed design concepts into responsive and engaging web experiences. I am passionate about delivering seamless user interactions and staying updated with the latest front-end technologies to enhance user experiences.</p>
                      </div>
                    </div>
                    {/* <!-- timeline item end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* todo: */}
      </div>
    </div>



  )
}



export default about;