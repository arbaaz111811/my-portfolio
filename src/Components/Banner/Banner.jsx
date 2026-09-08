import { FaWordpress, FaReact } from 'react-icons/fa'
import { SiShopify } from 'react-icons/si'
function Banner() {
    return (
        <section className="bg-[#FFFFF] pt-[30px] md:pt-[40px] lg:pt-[50px]">
            <div className="max-w-[1140px] mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10" >

                    {/* Left Content */}
                    <div className='order-2 lg:order-1 w-full lg:w-1/2'>
                        <h1 className="text-[22px] md:text-[42px] lg:text-[48px] font-bold">
                            Hello.
                        </h1>

                        <p className=" text-[14px] md:text-[16px] lg:text-[18px] 300">
                            I'm Arbaaz
                        </p>


                        <h2 className=" text-[18px] md:text-[24px] lg:text-[30px] font-bold">
                            Front-End Developer
                        </h2>
                        {/* <span>&lt;p&gt;</span>
                        <p>full stack developer</p>
                        <span>&lt;/p&gt;</span> */}


                        <div className="flex flex-col md:flex-row gap-4 mt-6">
                            <a
                                href="/CV.pdf"
                                download
                                className="inline-block border border-black text-black px-6 py-3 rounded hover:bg-[#314158] hover:text-white transition"
                            >
                                Download CV
                            </a>

                            <a
                                href="#contact"
                                className="inline-block border border-black text-black px-6 py-3 rounded hover:bg-[#314158] hover:text-white transition"
                            >
                                Contact Me
                            </a>

                            {/* <button className="border border-black-500 text-black-500 px-6 py-3 rounded">
                                Contact Me
                            </button> */}
                        </div>

                    </div>

                    {/* Right Image Area */}
                  <div className='order-1 lg:order-2 w-full lg:w-1/2 flex justify-center'>          
                        <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] bg-slate-800 rounded-full relative">

                            <img
                                src="/Arbaaz-Malim.png"
                                alt="Developer"
                                className="absolute bottom-[-30px]  md:bottom-[0px] lg:bottom-[0px] left-1/2 -translate-x-1/2 w-[400px] h-[302px] md:w-[450px] md:h-[340px] lg:w-[530px] lg:h-[400px] object-cover object-top"
                            />

                            {/* Shopify */}
                            <div className="absolute top-[25px] right-[15px] w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                <SiShopify className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]" />
                            </div>

                            {/* Angular */}
                            {/* <div className="absolute top-[80px] left-[0px] w-[90px] h-[90px] bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                <FaAngular size={45} />
                            </div> */}

                            {/* Wordpress */}
                            <div className="absolute bottom-[50px] left-[0px] w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                <FaWordpress className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]" />
                            </div>



                            {/* Rreact */}
                            <div className="absolute bottom-[50px] right-[0px] w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] bg-slate-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                <FaReact className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]" />
                            </div>


                            {/* <span className="hidden lg:block absolute left-[-70px] top-[50%]   text-gray-400 text-sm">
                                &lt;h1/&gt;
                            </span> */}




                        </div>
                  </div>            
                         
                </div>
            </div>
        </section>
    )
}

export default Banner