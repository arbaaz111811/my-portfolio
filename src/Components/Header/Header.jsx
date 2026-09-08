import { useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" sticky top-0 z-50 bg-[#314158] text-white ">

            <div className="">

                {/* Main Navbar */}
                <div className="flex justify-between items-center px-4 py-3">

                    {/* Logo + Brand Name */}
                    <div className="flex items-center gap-3">

                        <img
                            src="/Logo-A.png"
                            alt="Brand Logo"
                            className="w-12 h-12 object-contain"
                        />

                        <h2 className="text-xl md:text-2xl font-bold hover:text-[#FFF]">
                            Malim Arbaaz
                        </h2>

                    </div>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">

                        <a href="#" className="hover:text-[#FFF]">
                            Home
                        </a>

                        <a href="#" className="hover:text-[#FFF]">
                            About
                        </a>

                        <a href="#" className="hover:text-[#FFF]">
                            Projects
                        </a>

                        <a href="#" className="hover:text-[#FFF]">
                            Contact
                        </a>

                    </nav>


                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>

                </div>


                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden flex flex-col gap-5 px-4 pb-5">

                        <a
                            href="#"
                            className="hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>

                    </nav>
                )}

            </div>

        </header>
    );
}

export default Header;