import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosJournal } from "react-icons/io";

const Projects = () => {
    return (
        <div className="mt-32">
            <h1>Projects</h1>
            <div className="text-center mt-4 flex items-center">
                <a href="https://mapbook-f381d1faf354.herokuapp.com/" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <FaEarthAmericas />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">MapBook</h3>
                    <p class="mt-2 opacity-50 font-light text-base">The leading platform for professional logo design contests since 2010</p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Redux</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Firebase</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Heroku</span>
                    </div>

                </a>
                <a href="https://main--subtle-biscotti-65378e.netlify.app/" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <IoIosJournal />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">Day Logger</h3>
                    <p class="mt-2 opacity-50 font-light text-base">The leading platform for professional logo design contests since 2010</p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MUI</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Netlify</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;