import { useState } from 'react'
function Toogle() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-[120px] h-[60px] rounded-full bg-gray-300 p-1"
            >
                <span
                    className={`block w-[52px] h-[52px] rounded-full bg-white transition-transform duration-300 ${darkMode ? "translate-x-[60px]" : "translate-x-0"
                        }`}
                ></span>
            </button>
        </div>
    )
}

export default Toogle