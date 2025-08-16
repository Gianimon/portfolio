"use client"
import Burger from "@/components/burger";
import Link from "next/link";


export default function Contact() {

    return (
        <div className="flex flex-col h-screen text-white">
            {/* Header */}
            <header className="bg-[#457EAC] fixed w-full">
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b-2 border-b-white p-5">
                            <Burger></Burger>
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 p-5">
                            Kontakt
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="bg-[#2D5A76] h-screen text-center">
                <div className="inline-block mt-60 space-y-8">
                    <div className="text-5xl text-white font-bold">
                        Gian Loritz
                    </div>

                    <div
                        className="border-2 border-gray-400 rounded-4xl p-3 text-3xl text-gray-400 hover:text-white hover:border-white transition-colors">
                        <Link href="mailto:gianloritz@gmail.com">Email</Link>
                    </div>

                    <div
                        className="border-2 border-gray-400 rounded-4xl p-3 text-3xl text-gray-400 hover:text-white hover:border-white transition-colors">
                        <Link href="tel:+41798226695">Mobil</Link>
                    </div>

                    <div
                        className="border-2 border-gray-400 rounded-4xl p-3 text-3xl text-gray-400 hover:text-white hover:border-white transition-colors">
                        <a href="https://github.com/Gianimon" target="_blank"
                           rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </main>

        </div>
    )
}

