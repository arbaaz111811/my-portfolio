import { useState } from "react"
import Props from "../Propss/Props"
import faqData from "../../Data/faq.json"



function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        // <section className="bg-[#F1F5F9] py-[30px] md:py-[40px] lg:py-[50px]">
        //     <div className="max-w-[1140px] mx-auto px-4">

        //         <div className="text-center">

        //             <h2 className="text-black text-[24px] md:text-[28px] lg:text-[30px] font-semibold">
        //                 Frequently Asked Questions
        //             </h2>

        //             <p className="text-[#00000] text-[14px] md:text-[16px] lg:text-[18px] mt-2">
        //                 Answers to common questions about my work and process.
        //             </p>

        //         </div>

        //         <div className="mt-8 flex flex-col gap-3">

        //             {faqData.map((faq, index) => (
        //                 <div
        //                     key={index}
        //                     className="border border-[#164B88] bg-[#071A35] rounded-xl p-5"
        //                 >
        //                     <button
        //                         onClick={() => {
        //                             if (activeIndex === index) {
        //                                 setActiveIndex(null)
        //                             } else {
        //                                 setActiveIndex(index)
        //                             }
        //                         }}
        //                         className="w-full flex items-center justify-between text-left text-white text-[16px] md:text-[18px]"
        //                     >
        //                         <span>{faq.question}</span>

        //                         {activeIndex === index ? <FiMinus /> : <FiPlus />}
        //                     </button>

        //                     <div
        //                         className={`overflow-hidden transition-all duration-300 ${activeIndex === index
        //                                 ? "max-h-40 opacity-100"
        //                                 : "max-h-0 opacity-0"
        //                             }`}
        //                     >
        //                         <p className="text-[#D1D5DB] text-[14px] md:text-[16px] mt-3">
        //                             {faq.answer}
        //                         </p>
        //                     </div>
        //                 </div>
        //             ))}

        //         </div>

        //     </div>
        // </section>
<>
< Props faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
</>
    )
}

export default FAQ