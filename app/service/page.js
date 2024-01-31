import React from 'react'
import '../globals.css'
import Link from 'next/link'

function page() {
    return (
        <div className="mx-auto bg-[#353535] h-screen overflow-y-scroll font-serif">
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
            </div>
            <div className="row flex justify-center items-center flex-col">
                <h3 className='text-[#cc3a3b]'>SERVICE</h3>
                <h1 className='text-white text-2xl'>WHAT I DO</h1>
            </div>
            <div className="row flex flex-wrap">
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                                </metadata>
                                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M785 2981 c-22 -10 -54 -33 -72 -51 -67 -68 -63 13 -63 -1430 0
-1443 -4 -1362 63 -1430 71 -73 35 -70 787 -70 752 0 716 -3 787 70 67 68 63
-13 63 1430 0 1443 4 1362 -63 1430 -71 73 -35 70 -787 70 -632 0 -678 -2
-715 -19z m1045 -130 c14 -27 13 -66 -4 -80 -9 -8 -105 -11 -332 -9 l-319 3
-9 27 c-7 18 -6 35 2 53 l12 25 319 0 c306 0 321 -1 331 -19z m358 -1188 l-3
-968 -685 0 -685 0 -3 968 -2 967 690 0 690 0 -2 -967z m-617 -1189 c74 -37
90 -149 31 -212 -120 -129 -320 44 -209 181 41 51 113 64 178 31z"/>
                                </g>
                            </svg></button>
                        </div>
                        <h3 className='text-white text-2xl'>Responsive Design</h3>
                        <p className='text-[#808080]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit ratione.</p>
                    </div>
                </div>
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                                    </metadata>
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M2300 2991 c-87 -28 -114 -55 -237 -237 l-97 -144 -809 0 c-586 0
-820 -3 -848 -12 -51 -15 -114 -69 -142 -122 l-22 -41 -3 -794 c-3 -873 -4
-858 58 -933 16 -20 51 -47 77 -60 48 -23 50 -23 534 -28 l487 -5 -29 -120
c-16 -66 -31 -130 -34 -142 -5 -22 -10 -23 -103 -23 -82 0 -103 -4 -137 -23
-51 -29 -83 -77 -91 -138 l-7 -49 -98 0 c-86 0 -102 -3 -119 -20 -25 -25 -26
-62 -2 -83 17 -16 89 -17 824 -17 767 0 806 1 821 18 23 25 21 58 -3 82 -17
17 -33 20 -119 20 l-98 0 -7 49 c-8 61 -40 109 -91 138 -34 19 -55 23 -137 23
-93 0 -98 1 -103 23 -3 12 -18 76 -34 142 l-29 120 487 5 c484 5 486 5 534 28
26 13 61 40 77 60 62 75 61 60 58 933 l-3 794 -22 41 c-42 79 -129 134 -212
134 -36 0 -35 -3 -15 46 20 48 15 154 -10 201 -23 45 -75 96 -122 118 -43 21
-135 29 -174 16z m141 -134 c43 -29 59 -60 59 -119 0 -45 -5 -54 -87 -155
-228 -282 -327 -398 -338 -397 -13 1 -165 113 -165 122 0 2 80 124 178 270
112 167 188 272 207 283 42 26 104 24 146 -4z m-561 -372 c0 -3 -58 -93 -129
-199 l-130 -194 -68 -11 c-273 -47 -386 -274 -308 -619 25 -110 54 -126 134
-72 62 42 99 50 246 50 115 0 136 3 180 24 59 27 107 72 138 130 19 35 22 57
22 149 l0 108 190 232 c105 127 223 271 263 319 l72 88 81 0 c52 0 90 -5 109
-15 61 -32 60 -18 60 -650 l0 -575 -932 0 c-853 0 -933 -1 -950 -17 -22 -19
-23 -52 -4 -79 14 -19 37 -19 951 -22 l936 -2 -3 -160 -3 -160 -33 -32 -32
-33 -1170 0 -1170 0 -32 33 -33 32 -3 160 -3 160 91 0 c84 0 93 2 116 25 18
19 23 31 19 48 -12 39 -34 47 -132 47 l-93 0 0 575 c0 495 2 580 15 605 32 62
-3 59 838 60 422 0 767 -2 767 -5z m45 -340 c41 -31 75 -58 75 -61 0 -3 -27
-39 -61 -80 l-60 -74 -44 31 c-24 17 -58 43 -75 58 l-30 26 51 78 c29 42 56
77 60 77 5 0 43 -25 84 -55z m-193 -252 c58 -43 109 -87 112 -98 14 -49 6
-132 -17 -165 -42 -64 -72 -73 -236 -75 -108 -1 -157 -6 -190 -19 -24 -9 -46
-14 -49 -11 -3 2 -7 49 -10 103 -6 123 13 195 65 253 41 45 74 65 130 78 74
18 85 14 195 -66z m-143 -1310 c6 -21 20 -78 31 -128 12 -49 23 -98 26 -107 5
-17 -7 -18 -146 -18 -139 0 -151 1 -146 18 3 9 14 58 26 107 11 50 25 107 31
128 l10 37 79 0 79 0 10 -37z m373 -390 c10 -9 18 -29 18 -45 l0 -28 -480 0
-480 0 0 27 c0 14 7 35 17 45 15 17 43 18 461 18 400 0 447 -2 464 -17z"/>
                                        <path d="M628 1238 c-26 -21 -30 -53 -10 -78 22 -28 70 -30 89 -4 40 54 -26
123 -79 82z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <h3 className='text-white text-2xl'>Web Design</h3>
                        <p className='text-[#808080]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit ratione.</p>
                    </div>
                </div>
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                                    </metadata>
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M29 2971 l-29 -29 0 -206 c0 -202 0 -205 24 -233 l24 -28 217 0 217
0 24 28 c20 23 24 39 24 88 l0 59 178 0 177 -1 -35 -27 c-151 -118 -239 -213
-320 -348 -82 -135 -145 -316 -157 -455 -5 -63 -7 -67 -38 -82 -162 -77 -200
-287 -77 -421 43 -45 117 -76 187 -76 175 0 300 165 251 332 -18 62 -68 125
-121 153 l-37 20 7 54 c46 369 316 694 665 800 l54 17 31 -40 c98 -129 312
-129 410 0 l31 40 54 -17 c252 -76 464 -264 581 -513 40 -86 73 -198 84 -287
l7 -54 -37 -20 c-53 -28 -103 -91 -121 -153 -49 -167 76 -332 251 -332 147 0
258 111 258 258 1 107 -53 194 -148 239 -31 15 -33 19 -38 82 -24 267 -189
570 -405 743 -44 35 -88 68 -98 75 -15 9 18 12 164 12 l182 1 0 -59 c0 -49 4
-65 24 -88 l24 -28 217 0 217 0 24 28 c24 28 24 31 24 233 l0 206 -29 29 -29
29 -202 0 c-256 0 -269 -6 -270 -117 l0 -63 -359 0 -358 0 -30 48 c-108 174
-338 174 -446 0 l-30 -48 -358 0 -359 0 0 63 c-1 111 -14 117 -270 117 l-202
0 -29 -29z"/>
                                        <path d="M1058 1697 c-235 -352 -348 -531 -348 -548 0 -28 18 -56 82 -126 94
-104 188 -286 227 -438 11 -42 22 -79 24 -81 3 -3 31 3 63 13 52 16 99 18 394
18 295 0 342 -2 394 -18 32 -10 60 -16 63 -13 2 2 13 39 24 81 39 152 133 334
227 438 64 70 82 98 82 126 0 18 -113 196 -350 551 l-350 525 0 -415 0 -415
29 -13 c82 -36 141 -135 141 -234 -1 -150 -109 -258 -260 -258 -151 0 -259
108 -260 258 0 99 59 198 141 234 l29 13 0 412 c0 227 -1 413 -2 413 -2 0
-159 -236 -350 -523z"/>
                                        <path d="M1448 1220 c-24 -15 -41 -72 -29 -103 41 -106 196 -49 160 60 -6 18
-19 38 -29 43 -24 13 -80 12 -102 0z"/>
                                        <path d="M1185 350 c-106 -16 -210 -93 -260 -194 -32 -65 -32 -91 4 -127 l29
-29 542 0 542 0 29 29 c16 16 29 40 29 53 0 39 -46 121 -96 171 -56 56 -118
86 -199 98 -72 10 -549 10 -620 -1z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <h3 className='text-white text-2xl'>Web Design</h3>
                        <p className='text-[#808080]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, impedit ratione.</p>
                    </div>
                </div>
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                                    </metadata>
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M1603 2670 c-40 -24 -43 -35 -88 -330 -67 -439 -126 -824 -151 -990
-14 -91 -32 -205 -39 -255 -7 -49 -34 -224 -59 -388 -42 -273 -45 -300 -32
-332 38 -91 180 -83 205 12 6 21 26 144 46 273 67 439 126 824 151 990 14 91
32 206 39 255 7 50 34 224 59 388 42 273 45 300 32 332 -26 61 -102 82 -163
45z"/>
                                        <path d="M755 2331 c-34 -20 -721 -747 -741 -783 -17 -29 -17 -67 0 -96 22
-40 718 -772 749 -789 85 -44 188 59 145 145 -8 16 -154 176 -324 356 -170
180 -309 331 -309 336 0 5 143 160 317 345 344 364 347 368 313 438 -17 35
-65 67 -102 67 -10 0 -31 -8 -48 -19z"/>
                                        <path d="M2143 2334 c-41 -20 -67 -74 -59 -120 5 -26 72 -103 324 -369 174
-185 317 -340 317 -345 0 -5 -139 -156 -309 -336 -170 -180 -316 -340 -324
-356 -43 -86 60 -189 145 -145 31 17 727 749 749 789 17 29 17 67 0 96 -21 39
-717 772 -747 788 -35 18 -56 17 -96 -2z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <h3 className='text-white text-2xl'>Graphic Design</h3>
                        <p className='text-[#808080]'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                            impedit ratione.
                        </p>
                    </div>
                </div>
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                                    </metadata>
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M1075 2985 c-288 -46 -516 -163 -722 -371 -383 -388 -461 -988 -191
-1460 188 -330 519 -558 897 -620 116 -19 359 -14 466 10 166 37 308 98 449
191 l88 58 282 -279 c482 -479 520 -514 550 -514 65 0 116 59 102 117 -5 19
-133 153 -404 419 l-397 391 36 40 c127 141 232 364 273 582 21 107 21 313 1
422 -32 169 -108 354 -203 489 -108 154 -300 319 -470 404 -226 114 -515 160
-757 121z m348 -190 c220 -33 416 -128 576 -280 93 -88 146 -157 204 -265 313
-582 14 -1301 -623 -1494 -126 -38 -219 -49 -365 -44 -279 11 -504 108 -701
303 -194 192 -292 396 -313 653 -16 192 15 365 99 538 205 425 654 660 1123
589z"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <h3 className='text-white text-2xl'>Clean Code</h3>
                        <p className='text-[#808080]'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                            impedit ratione.
                        </p>
                    </div>
                </div>
                <div className='service_item'>
                    <div class="service_item_inner ">
                        <div class="icon inner_shadow">
                            <button className='socialMedia flex justify-center items-center'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 300.000000 300.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                                    </metadata>
                                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M2021 2983 c-19 -16 -23 -43 -45 -253 -22 -207 -23 -238 -10 -257 10
-15 24 -23 44 -23 50 0 57 24 82 279 l22 233 -23 19 c-29 24 -43 24 -70 2z"/>
                                        <path d="M1085 2581 c-22 -10 -51 -30 -65 -45 -14 -14 -133 -243 -265 -509
l-240 -482 -155 -106 c-218 -148 -265 -216 -265 -385 0 -73 4 -88 38 -156 46
-93 121 -166 205 -199 85 -33 196 -32 282 4 35 14 67 23 71 19 3 -4 102 -148
218 -320 117 -171 227 -323 245 -337 98 -74 230 -71 314 8 56 52 84 156 63
233 -6 24 -90 158 -206 329 -108 158 -195 289 -193 290 2 2 203 20 446 39 272
22 456 42 476 50 49 20 103 82 128 145 45 115 24 325 -53 519 -165 417 -521
813 -811 903 -78 25 -180 25 -233 0z m194 -110 c181 -56 390 -243 566 -506
251 -374 316 -733 153 -836 -69 -42 -196 -4 -341 104 -242 179 -461 488 -564
796 -30 88 -37 125 -41 217 -4 97 -2 116 16 157 17 38 30 52 64 67 54 24 71
25 147 1z m-264 -571 c119 -288 335 -581 549 -742 45 -33 82 -63 84 -67 1 -4
-152 -19 -340 -33 -266 -21 -346 -24 -355 -15 -7 7 -82 115 -167 240 l-154
228 58 122 c31 67 101 210 155 317 l97 194 24 -89 c12 -50 35 -119 49 -155z
m-312 -699 l145 -215 -106 -74 c-144 -100 -192 -122 -268 -122 -222 0 -348
275 -200 436 46 49 267 205 278 195 3 -3 71 -102 151 -220z m391 -431 c309
-455 326 -482 326 -523 0 -50 -25 -92 -66 -112 -39 -19 -56 -19 -98 -1 -37 15
-46 28 -300 403 l-177 263 92 60 c51 34 100 59 108 58 9 -2 60 -68 115 -148z"/>
                                        <path d="M1360 2021 c-54 -19 -100 -59 -100 -87 0 -18 36 -54 54 -54 7 0 35 9
61 21 36 16 62 20 105 17 103 -7 171 -75 178 -177 5 -68 -16 -116 -72 -170
-20 -19 -36 -45 -36 -56 0 -29 30 -55 62 -55 34 0 100 64 135 132 36 70 39
187 6 259 -67 148 -242 224 -393 170z"/>
                                        <path d="M2474 2424 c-115 -75 -212 -139 -215 -143 -21 -20 -19 -52 5 -76 14
-14 31 -25 39 -25 14 0 392 244 435 281 40 34 17 99 -35 99 -11 0 -114 -61
-229 -136z"/>
                                        <path d="M2361 1901 c-28 -28 -27 -67 2 -85 20 -13 456 -96 503 -96 26 0 54
30 54 56 0 45 -18 51 -255 94 -126 22 -242 43 -257 46 -19 4 -33 -1 -47 -15z"/>
                                    </g>
                                </svg>

                            </button>
                        </div>
                        <h3 className='text-white text-2xl'>Seo Marketing</h3>
                        <p className='text-[#808080]'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                            impedit ratione.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page