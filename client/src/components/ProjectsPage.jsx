import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosJournal } from "react-icons/io";
import Footer from "./Footer";
import { CiChat1 } from "react-icons/ci";
import { CiBitcoin } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const ProjectsPage = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <h1 className="text-5xl">Projects</h1>
            <div className="mt-10 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <a href="https://github.com/samuelhan713/Vital" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <MdOutlineHealthAndSafety />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">Vital</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Get recommendations about essential dietary supplements with machine learning!
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">NLP</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Redux</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Material UI</span>
                    </div>
                    <div className="flex justify-center items-center mt-10 ml-80">
                        <MdOutlinePeople />
                        <span class="text-sm">3 developers</span>
                    </div>
                </a>
                <a href="https://github.com/sms021019/mental-health-tracker" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <RiMentalHealthLine />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">MindBloom.ai</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Track and improve your mental health with the power of AI!
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">NLP</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Redux</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Material UI</span>
                    </div>
                    <div className="flex justify-center items-center mt-10 ml-80">
                        <MdOutlinePeople />
                        <span class="text-sm">4 developers</span>
                    </div>
                </a>
                <a href="https://github.com/samuelhan713/r-CryptoCurrency_Data_Analysis" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <CiBitcoin />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">Reddit Cryptocurrency Recommender</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Get recommendations on which cryptocurrency to invest in using AI!
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Python</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Sentiment Analysis</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Random Forest</span>
                    </div>
                    <div className="flex justify-between">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1 mt-2">NLTK</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1 mt-2">Machine Learning</span>
                    </div>
                </a>
                <a href="https://mapbook-f381d1faf354.herokuapp.com/" target="_blank" className="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186 w-full">
                        <span name="Shape35" color="2D3A46" size="20" role="img" className="go2599496350 flex justify-between w-full">
                            <FaEarthAmericas />
                            <span className="flex items-center mr-4">
                                <div class="h-3 w-3 bg-red-400 rounded-full mr-1"></div>
                                <p className="text-base font-normal">Live</p>
                            </span>
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">MapBook</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Create, edit, and share maps with MapBook.
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Redux</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Firebase</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Heroku</span>
                    </div>
                    <div className="flex justify-center items-center mt-10 ml-80">
                        <MdOutlinePeople />
                        <span class="text-sm">4 developers</span>
                    </div>
                </a>
                <a href="https://main--subtle-biscotti-65378e.netlify.app/" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186 w-full">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350 w-full flex justify-between">
                            <IoIosJournal />
                            <span className="flex items-center mr-4">
                                <div class="h-3 w-3 bg-red-400 rounded-full mr-1"></div>
                                <p className="text-base font-normal">Live</p>
                            </span>
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">Day Logger</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Keep track of your daily activities with Day Logger.
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MUI</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Netlify</span>
                    </div>
                </a>
                <a href="https://github.com/samuelhan713/samcord-client" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <CiChat1 />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">Samcord</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Chat with others on Samcord.
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MUI</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Socket.IO</span>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPage;