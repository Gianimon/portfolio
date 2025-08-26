"use client";
import Burger from "@/components/burger";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-white">
            {/* Header */}
            <header className="bg-[#457EAC] fixed w-full z-50">
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b-2 border-b-white p-5">
                            <Burger />
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 p-5">
                            Home
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main */}
            <main className="bg-[#2D5A76] flex-1 pt-16 sm:pt-20 lg:pt-28 px-4 mt-7">
                <div
                    className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-7rem)] gap-12 lg:gap-20">
                    {/* Bild */}
                    <img
                        src="/foto_rechts2.jpg"
                        alt="Bild von Gian"
                        className="w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] h-auto"
                    />

                    {/* Text */}
                    <div
                        className="text-center lg:text-left text-lg sm:text-xl lg:text-2xl max-w-lg">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Willkommen!
                        </h1>
                        <p className="mb-8">
                            Mein Name ist Gian Loritz. <br/>
                            Schön, dass Sie mein Portfolio besuchen.
                        </p>
                        <Link href="/about-me">
                            <button
                                className="mt-2 py-2 px-6 border-2 rounded-2xl transition duration-300 hover:bg-[#2D6A86]">
                                Erfahre mehr
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
