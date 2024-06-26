import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full relative mt-14 flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row items-center text-base font-normal">
                <a className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100 cursor-pointer" onClick={() => navigate('/')}>Home</a>
                <a className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100 cursor-pointer" onClick={() => navigate('/about')}>About</a>
                <a className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100 cursor-pointer" onClick={() => navigate('/experience')}>Experience</a>
                <a className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100 cursor-pointer" onClick={() => navigate('/projects')}>Projects</a>
                <a className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100 cursor-pointer" onClick={() => navigate('/allMessages')}>Notes</a>
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
            </ul>
            <div className="text-sm font-normal flex mt-6">
                <span>©2024 Copyright: Samuel Han</span>
            </div>
        </div>
    )
}

export default Footer;