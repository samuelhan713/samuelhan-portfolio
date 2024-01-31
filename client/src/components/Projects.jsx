import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosJournal } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CiBitcoin } from "react-icons/ci";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-32">
            <h1 className="text-4xl">Projects</h1>
            {/* <div className="text-center mt-4 flex items-center"> */}
            <div className="mt-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
                <a href="https://mapbook-f381d1faf354.herokuapp.com/" target="_blank" class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300">
                    <div size="40" color="E0E6EB" class="go1550876186">
                        <span name="Shape35" color="2D3A46" size="20" role="img" class="go2599496350">
                            <FaEarthAmericas />
                        </span>
                    </div>
                    <h3 class="text-2xl mt-4 font-medium">MapBook</h3>
                    <p class="mt-2 opacity-50 font-light text-base">
                        Create, edit, and share maps with your friends or strangers!
                    </p>
                    <div className="flex justify-between mt-4">
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">MERN</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Redux</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Firebase</span>
                        <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">Heroku</span>
                    </div>
                </a>
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <button onClick={() => navigate('/projects')} class="relative gradient-border px-4 py-2 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300">
                        See more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects;