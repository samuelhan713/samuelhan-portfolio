import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="my-10 w-full relative mt-20 flex flex-col items-center text-center">
            <div class="flex flex-col md:flex-row items-center text-base font-normal">
                <a class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="/">Home</a>
                <a class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="/work">Work</a>
                <a class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="/about">About</a>
                <a class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="/blog">Blog</a>
                <a target="_blank" class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="https://www.youtube.com/channel/UCFzQ8NxZlRupTk98FSoar9Q">Youtube</a>
                <a class="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100" href="/contact">Contact</a>
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
        </div>
    )

}

export default Footer;