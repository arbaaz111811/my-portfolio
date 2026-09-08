import { FiMail } from "react-icons/fi";
function Body() {
    return (

        <section className="bg-[#F1F5F9] py-[50px] md:pt-[40px] lg:pt-[50px]">

            <div className="max-w-[1140px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-5 items-center">

                    {/* Left Content Area */}
                    <div className="w-full lg:flex-3">
                        <span className="text[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#314158]">More</span>
                        <h2 className="text-[18px] md:text-[24px] lg:text-[35px] font-bold"> About me</h2>
                    </div>
                    
                    {/* Right content Area */}
                    <div className="w-full lg:flex-7">

                        <p className="text-[14px] md:text-[16px] lg:text-[18px] 300">
                            I've been working in projects with Laravel (2 years) and ReactJS (classes/hooks) (5+ years). However, I've also worked in other projects with Golang (1 year) or NodeJS (3 years). Overall, I love working with TypeScript, ReactJS, NodeJS and any other technologies I use in my daily basis.
                        </p>

                        <a
                            href="mailto:your_email@yaminkhan866@gmail.com"
                            className="inline-flex items-center gap-5 border border-black text-black px-6 py-2  mt-6 rounded hover:bg-[#314158] hover:text-white transition rounded-full"
                        >
                            Let's Talk
                            <FiMail size={16} />

                        </a>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default Body