import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const DropDown = () => {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
        {
            id: 1,
            name: 'home'
        }, {
            id: 2,
            name: 'about'
        }, {
            id: 3,
            name: 'projects'
        }, {
            id: 4,
            name: 'youtube'
        }, {
            id: 5,
            name: 'contacts'
        }
    ]
    return (
        <div className="relative flex flex-col items-center">
            <button onClick={() => setShowMenu(!showMenu)} className="text-black font-normal bg-gray-100 w-full flex items-center justify-between text-base rounded-lg px-4 py-3">
                Menu
                {!showMenu ? (
                    <IoIosArrowDown />
                ) : (
                    <IoIosArrowUp />
                )}
            </button>
            {showMenu && (
                <div>
                    <div className="absolute z-10 text-black top-14 right-0 flex flex-col items-start rounded-lg w-48 bg-white r shadow-lg shadow-sky-500">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-full px-2 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
                            {links.map((link, i) => (
                                <div className="font-normal text-base justify-between hover:bg-gray-100 cursor-pointer rounded-lg p-2 m-0">
                                    <h3 className="">{link.name}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default DropDown;