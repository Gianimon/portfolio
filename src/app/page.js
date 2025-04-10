"use client"
import Burger from "@/components/burger";
import Link from "next/link";

export default function Home() {

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
                            Home
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="bg-[#2D5A76] h-screen">
                <div className={"flex mt-50 items-center"}>
                    <img src="https://placehold.co/500x500"
                         alt="Bild von Gian"
                         className={"w-100% h-100% ml-30"}/>
                    <div className=" ml-20 mr-30 text-2xl">
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed
                        diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                        magna
                        aliquyam erat, sed diam voluptua. At vero eos et
                        accusam
                        et
                        justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no
                        sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem
                        ipsum
                        dolor sit amet, consetetur sadipscing elitr, sed
                        diam
                        nonumy
                        eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                        erat,
                        sed diam voluptua. At vero eos et accusam et justo
                        duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea
                        takimata
                        sanctus
                        est Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </main>

            <footer
                className="border-t-2 z-50 border-white p-5 fixed bottom-0 left-0 w-full bg-[#457EAC]">
                <nav>
                    <ul className="flex justify-between px-32 pl-150 pr-150">
                        <li><Link href="/">Portfolio</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}
