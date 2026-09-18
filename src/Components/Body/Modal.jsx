import { useState } from "react"

import { FiX } from "react-icons/fi"

function Modal() {
    const [showModal, setShowModal] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    

    return (

        <section>
            {/* <button onClick={() => setShowModal(false)}>
                Open Modal
            </button> */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">


                    <div className="relative  bg-[#202653] rounded-xl overflow-hidden flex flex-col lg:flex-row">

                        {/* Left Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/Arbaaz-Malim.png"
                                alt="Arbaaz"
                                className="w-full h-120 object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10">

                            <span className="text-[#7FA9E8] text-[12px] md:text-[14px]">
                                Do you need anything?
                            </span>

                            <h2 className="text-white text-[28px] md:text-[32px] font-bold mt-1">
                                Let's Have a Call!
                            </h2>

                            <form onSubmit={(e) => {
                                e.preventDefault()
                                setSubmitted(true)
                            }} className="mt-5 flex flex-col gap-3">

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-[#292F67] text-white placeholder:text-[#8B91B5] px-4 py-2 rounded-full outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full bg-[#292F67] text-white placeholder:text-[#8B91B5] px-4 py-2 rounded-full outline-none"
                                />

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    placeholder="Enter your phone number"
                                    required
                                    title="Please enter a 10-digit phone number"
                                    className="w-full bg-[#292F67] text-white placeholder:text-[#8B91B5] px-4 py-2 rounded-full outline-none"
                                />

                                <textarea
                                    placeholder="Tell me more about your project..."
                                    required
                                    className="w-full h-[100px] bg-[#292F67] text-white placeholder:text-[#8B91B5] px-4 py-3 rounded-xl outline-none resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-[#6495D5] text-white py-2 rounded-full text-sm mt-1"
                                >
                                    Let's Talk!
                                </button>

                            </form>
                            {submitted && (
                                <p className="text-white mt-4">
                                    Form submitted successfully!
                                </p>
                            )}

                            {/* <div className="flex gap-3 mt-6">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#292F67] text-white flex items-center justify-center hover:bg-[#6495D5] transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#292F67] text-white flex items-center justify-center hover:bg-[#6495D5] transition"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#292F67] text-white flex items-center justify-center hover:bg-[#6495D5] transition"
                            >
                                <FaInstagram />
                            </a>

                        </div> */}

                        </div>


                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-10 text-white text-2xl"
                        >
                            <FiX />
                        </button>

                    </div>



                </div>



            )}
        </section>

    )
}

export default Modal