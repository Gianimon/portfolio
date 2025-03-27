"use client"
import Link from "next/link";
import {useState} from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col min-h-screen text-white">
            {/* Header */}
            <header className="bg-[#457EAC]">
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b border-b-black p-5">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                &#9776;
                            </button>
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 border-b border-b-black p-5">
                            Gian Loritz
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-3 left-0 bg-[#457EAC] p-5 shadow-lg z-31 mt-16 w-1/4 h-250 border-white border-2 p-10">
                    <ul className="flex flex-col space-y-4 text-xl">
                        <li><Link href="/#"
                                  onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                        </li>
                        <li className="border-t border-white pt-5"><Link href="/#"
                                  onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li className="border-t border-white pt-5"><Link href="/#"
                                  onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link></li>
                        <li className="border-t border-white pt-5"><Link href="/#"
                                  onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}

            {isMenuOpen && (
                <div className="absolute top-19 h-250 left-0 bg-black p-5 shadow-lg z30 w-full opacity-50">
                </div>
            )}


            <main className="bg-[#2D5A76]">
                <div className="ml-10 mr-10">
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et
                        justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no
                        sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy
                        eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                        erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus
                        est Lorem ipsum dolor sit amet.
                    </div>
                    <div className={"mt-200 mb-17"}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et
                        justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no
                        sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy
                        eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                        erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus
                        est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </main>
            <footer
                className="border-t-2 z-50 border-white p-5 fixed bottom-0 left-0 w-full bg-[#457EAC]">
                <nav>
                    <ul className="flex justify-between px-32 pl-150 pr-150">
                        <li><Link href={"/portfolio"}>Portfolio</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/privacy"}>Privacy Policy</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
