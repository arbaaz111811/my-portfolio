import { useState } from 'react'
import { FiMail, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { SiTailwindcss, SiJavascript } from 'react-icons/si'
import { FaReact, FaHtml5, FaBootstrap } from 'react-icons/fa'


function Skill() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const handleMinus = () => {
        if (currentIndex == 1) {
            return
        }
        setCurrentIndex((currentIndex) => currentIndex - 1);
    }
    const handlePlus = () => {
        if (currentIndex == 5) {
            return
        }
        setCurrentIndex((currentIndex) => currentIndex + 1);
        
    }
    
    console.log(currentIndex, "currentIndex");
    
    return (

        <section className="bg-[#FFFFF] py-[50px] md:pt-[40px] lg:pt-[50px] ">

            <div className="max-w-[1140px] mx-auto px-4">

                <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-center justify-between">

                    {/* Left Content Area */}
                    <div >
                        <span className="text[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#314158]">My coding</span>
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold "> Skills</h2>
                    </div>

                    {/* Right content Area */}
                    <div >
                        
                         {/* <a
                            href="mailto:your_email@yaminkhan866@gmail.com"
                            className="inline-flex items-center gap-5 border border-black text-black px-6 py-2  mt-6 rounded hover:bg-[#314158] hover:text-white transition rounded-full"
                        >
                            Let's Talk
                            <FiMail size={16} />

                        </a> */}
                        <a
                            href="mailto:yaminkhan866@gmail.com"
                            className="inline-flex items-center gap-3 md:gap-4 lg:gap-5 border border-black text-black px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-2 mt-6 lg:mt-0 bg-[#314158] text-white transition rounded-full"
                        >
                            Let's Talk
                            <FiMail size={16} />

                        </a>

                    </div>
                </div>

                {/* Skills Cards */}
                <div className="overflow-hidden mt-12">

                    <div className="flex gap-6 transition-transform duration-500 overflow-x-scroll" >
                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 border border-[#314158] rounded-2xl h-[150px] md:h-[220px] lg:h-[210px] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center md:justify-between lg:justify-between">

                            <FaReact className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#314158]" />

                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#314158] md:text-center lg:text-center mt-4">
                                React JS Library
                            </h3>

                        </div>
                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 border border-[#314158] rounded-2xl h-[150px] md:h-[220px] lg:h-[210px] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center md:justify-between lg:justify-between">

                            <FaHtml5 className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#314158]" />

                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#314158] md:text-center lg:text-center mt-4">
                                HTML
                            </h3>

                        </div>
                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 border border-[#314158] rounded-2xl h-[150px] md:h-[220px] lg:h-[210px] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center md:justify-between lg:justify-between">

                            <FaBootstrap className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#314158]" />

                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#314158] md:text-center lg:text-center mt-4">
                                Bootstrap
                            </h3>

                        </div>
                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 border border-[#314158] rounded-2xl h-[150px] md:h-[220px] lg:h-[210px] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center md:justify-between lg:justify-between">

                            <SiTailwindcss className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#314158]" />

                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#314158] md:text-center lg:text-center mt-4">
                                Tailwind
                            </h3>

                        </div>

                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(25%_-_18px)] shrink-0 border border-[#314158] rounded-2xl h-[150px] md:h-[220px] lg:h-[210px] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center md:justify-between lg:justify-between">

                            <SiJavascript className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] text-[#314158]" />

                            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#314158] text-center mt-4">
                                JavaScript
                            </h3>
                        </div>
                    </div>
                </div>



                {/* Carousel Arrows */}
                <div className="flex justify-center gap-4 mt-8">

                    <button
                        onClick={() => handleMinus()}
                        className="w-10 h-10 rounded-full border border-[#314158] flex items-center justify-center text-[#314158]"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        onClick={() => handlePlus()}
                        className="w-10 h-10 rounded-full border border-[#314158] flex items-center justify-center text-[#314158]"
                    >
                        <FiChevronRight />
                    </button>

                </div>
            </div>



        </section>
    )
}

export default Skill