import { FaLinkedinIn, FaGithub,FaInstagram} from "react-icons/fa"
import { FiMail } from "react-icons/fi"
function Footer() {
    return (
        <footer className="bg-black text-white py-6">
            <div className="px-6 py-3">

                <div className="flex flex-col lg:flex-row justify-between gap-10">

                    {/* Left Side */}
                    <div className="max-w-[500px]">

                        <h2 className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold">
                            Arbaaz Malim
                        </h2>

                        <p className="text-[#8FA4C7] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed mt-6">
                            Building innovative digital solutions that make a
                            difference. Always learning, always growing, always
                            coding.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">

                            <a
                                href="#"
                                className="w-[60px] h-[60px] rounded-full border border-[#242424] flex items-center justify-center text-[#8FA4C7]"
                            >
                                <FaLinkedinIn size={24} />
                            </a>

                            <a
                                href="#"
                                className="w-[60px] h-[60px] rounded-full border border-[#242424] flex items-center justify-center text-[#8FA4C7]"
                            >
                                <FaGithub size={24} />
                            </a>

                            
                            <a
                                href="#"
                                className="w-[60px] h-[60px] rounded-full border border-[#242424] flex items-center justify-center text-[#8FA4C7]"
                            >
                                <FaInstagram size={24} />
                            </a>

                            <a
                                href="mailto:yaminkhan866@gmail.com"
                                className="w-[60px] h-[60px] rounded-full border border-[#242424] flex items-center justify-center text-[#8FA4C7]"
                            >
                                <FiMail size={24} />
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="text-white text-[20px] md:text-[22px] font-bold">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4 mt-6">

                            <a href="#about" className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                About
                            </a>

                            <a href="#skills" className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                Skills
                            </a>

                            <a href="#projects" className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                Projects
                            </a>

                            <a href="#experience" className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                Experience
                            </a>

                            <a href="#contact" className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                Contact
                            </a>

                        </div>

                    </div>


                    {/* Get in Touch */}
                    <div>

                        <h3 className="text-white text-[20px] md:text-[22px] font-bold">
                            Get in Touch
                        </h3>

                        <div className="flex flex-col gap-4 mt-6">

                            <a
                                href="mailto:yaminkhan866@gmail.com"
                                className="text-[#8FA4C7] text-[16px] md:text-[18px]"
                            >
                                yaminkhan866@gmail.com
                            </a>

                            <a
                                href="tel:+917021177410"
                                className="text-[#8FA4C7] text-[16px] md:text-[18px]"
                            >
                                +91 70211 77410
                            </a>

                            <a className="text-[#8FA4C7] text-[16px] md:text-[18px]">
                                Mumbra, Maharashtra
                            </a>

                        </div>

                    </div>

                </div>


            </div>
            <div className="border-t border-[#242424] mt-16 pt-8 px-6 ">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-[#8FA4C7] text-[14px] md:text-[16px] lg:text-[18px]">
                        © 2026 Arbaaz Malim. All rights reserved.
                    </p>

                    <p className="text-[#8FA4C7] text-[14px] md:text-[16px] lg:text-[18px]">
                        Made with ❤️ and coffee
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer