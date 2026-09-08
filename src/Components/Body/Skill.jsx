import { FiMail } from "react-icons/fi"

function Skill() {
    return (
        <section className="bg-[#FFFFF] py-[50px] md:pt-[40px] lg:pt-[50px]">

            <div className="max-w-[1140px] mx-auto px-4">
                
                <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-center justify-between">

                    {/* Left Content Area */}
                    <div >
                        <span className="text[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#314158]">My coding</span>
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold "> Skills</h2>
                    </div>

                    {/* Right content Area */}
                    <div >

                        <a
                            href="mailto:yaminkhan866@gmail.com"
                            className="inline-flex items-center gap-5 border border-black text-black px-6 py-2  mt-6 lg:mt-0 bg-[#314158] text-white transition rounded-full"
                        >
                            Let's Talk
                            <FiMail size={16} />

                        </a>

                    </div>
                </div>

                <div>
                
               </div>
            </div>

            

        </section>
    )
}

export default Skill