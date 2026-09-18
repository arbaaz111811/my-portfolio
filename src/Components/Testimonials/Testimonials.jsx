import { useState } from "react"
import testimonials from "../../Data/testimonials.json"

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <section className="bg-[#FFFFF] py-[30px] md:py-[40px] lg:py-[50px]">
            <div className="max-w-[1140px] mx-auto px-4">

                <h2 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold">
                    Testimonials
                </h2>

                <div className="mt-8 border border-[#314158] rounded-xl p-6">

                    <h3 className="text-[20px] font-bold">
                        {testimonials[currentIndex].name}
                    </h3>

                    <p className="text-[#314158] mt-1">
                        {testimonials[currentIndex].role}
                    </p>

                    <p className="text-gray-600 mt-3">
                        {testimonials[currentIndex].message}
                    </p>

                    <div className="flex gap-4 mt-6">

                        {/* Previous Button */}
                        <button
                            disabled={currentIndex === 0}
                            onClick={() => {
                                if (currentIndex > 0) {
                                    setCurrentIndex(currentIndex - 1)
                                }
                            }}
                            className="px-5 py-2 border border-[#314158] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        {/* Next Button */}
                        <button
                            disabled={currentIndex === testimonials.length - 1}
                            onClick={() => {
                                if (currentIndex < testimonials.length - 1) {
                                    setCurrentIndex(currentIndex + 1)
                                }
                            }}
                            className="px-5 py-2 bg-[#314158] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>


                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${currentIndex === index
                                        ? "bg-[#314158]"
                                        : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}



export default Testimonials