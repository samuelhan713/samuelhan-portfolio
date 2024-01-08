import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
    return (
        <div className="mt-12">
            <div className="p-2 md:p-0 flex flex-col items-center">
                <img src="assets/profile_pic.png" className="w-40 h-40 rounded-full object-cover border-4 border-black" />
                <div className="flex flex-row items-center text-center text-5xl mt-12">
                    <span className="ml-3">
                        Hi,
                    </span>
                    <span className="ml-3">
                        I'm
                    </span>
                    <span className="ml-3">
                        Samuel
                    </span>
                    <span className="ml-3">
                        Han!
                    </span>
                </div>
                <div className="flex flex-row items-center text-center text-5xl mt-4">
                    <span className="ml-3">
                        I
                    </span>
                    <span className="ml-3">
                        love
                    </span>
                    <span className="ml-3">
                        creating
                    </span>
                </div>
                <div className="flex flex-row items-center text-center text-5xl mt-4">
                    <span className="ml-3">
                        and
                    </span>
                    <span className="ml-3">
                        I
                    </span>
                    <span className="ml-3">
                        like
                    </span>
                    <span className="ml-3">
                        to
                    </span>
                    <span className="ml-3">
                        code.
                    </span>
                </div>
                <ul className="bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm mt-5">
                    <a className="p-2" target="_blank" href="https://github.com/samuelhan713">
                        <FaGithub className="opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" />
                    </a>
                    <a className="p-2" target="_blank" href="https://www.linkedin.com/in/samuel-seukhyun-han/">
                        <FaLinkedin className="opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" />
                    </a>
                    <a className="p-2" target="_blank" href="https://youtube.com/@Sammy_Han?si=lfbZMGOoi1jH_2SY">
                        <FaYoutube className="opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" />
                    </a>
                    {/* TODO: add email link */}
                </ul>
                <button className="relative gradient-border m-1 px-3 py-2 rounded-xl flex items-center justify-center bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white mt-10 px-5 py-3 md:px-10 md:py-6 text-xl">
                    Send me an email
                </button>
            </div>
        </div>
    )
}

export default Home; 