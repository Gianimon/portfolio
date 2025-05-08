import Link from "next/link";
import {useState} from "react";

export default function Burger() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)};

    return (
        /* Mobile Menu */
        <div>
            <button onClick={toggleMenu}
                    className="focus:outline-none">
                &#9776;
            </button>
            {
                isMenuOpen && (
                    <div
                        className="absolute top-19 left-0 bg-[#457EAC] p-5 shadow-lg z-101 w-1/4 h-screen border-white border-2 p-10">
                        <ul className="flex flex-col space-y-4 text-xl">
                            <li><Link href={"/"}
                                      onClick={() => setIsMenuOpen(false)}>Home</Link>
                            </li>
                            <li className="border-t border-white pt-5"><Link
                                href={"/about-me"}
                                onClick={() => setIsMenuOpen(false)}>About Me</Link>
                            </li>
                            <li className="border-t border-white pt-5"><Link
                                href={"https://github.com/Gianimon"} target="_blank"
                                onClick={() => setIsMenuOpen(false)}>GitHub</Link></li>
                            <li className="border-t border-white pt-5"><Link
                                href={"/contact"}
                                onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )
            }

            {
                isMenuOpen && (
                    <div
                        className="absolute top-19.5 h-250 left-0 bg-black p-5 shadow-lg z-100 w-full opacity-50 h-screen">
                    </div>
                )
            }
        </div>
    )
}