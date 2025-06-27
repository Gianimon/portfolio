import Link from "next/link";
import { useState } from "react";

export default function Burger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
                &#9776;
            </button>

            {/* Sidebar (Desktop) */}
            {isMenuOpen && (
                <div className="hidden lg:block fixed top-19 left-0 bg-[#457EAC] shadow-lg z-50 w-1/4 h-screen border-white border-t-2 border-r-2">
                    <ul className="flex flex-col space-y-4 text-xl p-5">
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li className="border-t border-white pt-5"><Link href="/about-me" onClick={() => setIsMenuOpen(false)}>Über Mich</Link></li>
                        <li className="border-t border-white pt-5"><Link href="https://github.com/Gianimon" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</Link></li>
                        <li className="border-t border-white pt-5"><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</Link></li>
                    </ul>
                </div>
            )}

            {/* Dropdown (Mobile) */}
            {isMenuOpen && (
                <div className="block lg:hidden absolute mt-5 top-full left-0 w-full bg-[#457EAC] shadow-lg z-50 border-t-2 border-white rounded-b-xl">
                    <ul className="flex flex-col space-y-4 p-5 text-xl">
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li className="border-t border-white pt-5"><Link href="/about-me" onClick={() => setIsMenuOpen(false)}>Über Mich</Link></li>
                        <li className="border-t border-white pt-5"><Link href="https://github.com/Gianimon" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</Link></li>
                        <li className="border-t border-white pt-5"><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</Link></li>
                    </ul>
                </div>
            )}

            {/* Optional: Overlay (Mobile) */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-40 mt-20"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
}
