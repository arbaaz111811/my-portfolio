import { useState } from "react"
import projects from "../../Data/projects.json"


function Projects() {
    const [category, setCategory] = useState("all")
    const [projectData, setProjectData] = useState(projects)

    // projects.filter((item) =>
    //   filte() → Which items do I want?

    const filteredProjects = projectData.filter((project) => {
        return category === "all" || project.category === category
    })


    return (

        <section className="bg-[#F1F5F9] py-[30px] md:py-[40px] lg:py-[50px]">
            <div className="max-w-[1140px] mx-auto px-4" >
                <h2 className="text-[18px] md:text-[24px] lg:text-[35px] font-bold"> My Projects</h2>
                <div className="flex flex-wrap gap-4 mt-4 text-[14px] md:text-[16px] lg:text-[20px] 300">

                    <button
                        onClick={() => setCategory("all")}
                        className={`px-5 py-2 rounded-full ${category === "all"
                            ? "bg-[#314158] text-white hover:bg-[#314158] hover:text-white transition"
                            : "border border-[#314158] text-[#314158]"
                            }`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setCategory("react")}
                        className={`px-5 py-2 rounded-full ${category === "react"
                            ? "bg-[#314158] text-white"
                            : "border border-[#314158] text-[#314158] hover:bg-[#314158] hover:text-white transition"
                            }`}
                    >
                        React
                    </button>

                    <button
                        onClick={() => setCategory("wordpress")}
                        className={`px-5 py-2 rounded-full ${category === "wordpress"
                            ? "bg-[#314158] text-white"
                            : "border border-[#314158] text-[#314158] hover:bg-[#314158] hover:text-white transition"
                            }`}
                    >
                        WordPress
                    </button>

                    <button
                        onClick={() => setCategory("shopify")}
                        className={`px-5 py-2 rounded-full ${category === "shopify"
                            ? "bg-[#314158] text-white"
                            : "border border-[#314158] text-[#314158] hover:bg-[#314158] hover:text-white transition"
                            }`}
                    >
                        Shopify
                    </button>


                </div>
                <p className="mt-4">
                    Showing {filteredProjects.length} projects
                </p>

                <div className="flex flex-wrap gap-6 mt-4">
                    {/* // map() → What should I show for those items? */}
                    {filteredProjects.map((project) => (

                        <div className="w-full md:w-[calc(50%_-_12px)] lg:w-[calc(33.333%_-_16px)] border border-gray-300 rounded-xl  hover:shadow-lg hover:-translate-y-2 transition duration-300">
                            <div  className="w-full  flex justify-center">
                                {/* <img
                                    src={project.image}
                                    alt={project.name} 
                                    className=" object-cover w-full h-full   rounded-lg flex justify-items-center" fill/> */}


                            </div>
                            <div className="p-6">

                                <h3>{project.name}</h3>
                                {/* <p>{project.category}</p> */}

                                <p className="text-sm text-gray-600 mt-2">
                                    {project.description}
                                </p>
                                <button className="mt-4"
                                    onClick={() => {
                                        setProjectData(
                                            projectData.map((item) => {
                                                if (item.name === project.name) {
                                                    return {
                                                        ...item,
                                                        like: !item.like
                                                    }
                                                }

                                                return item
                                            })
                                        )
                                    }}
                                >
                                    {project.like ? "♥ Liked" : "♡ Like"}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Projects