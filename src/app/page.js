"use client"
import Burger from "@/components/burger";
import Carousel from "@/components/carousel";

export default function Home() {

    return (
        <div className="flex flex-col min-h-screen text-white">
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


            <main className="bg-[#2D5A76]">
                <div>
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
                <div><Carousel></Carousel></div>


                <div className="flex flex-col items-center py-10">
                    <div className="text-3xl mb-20">
                        Skills
                    </div>
                </div>
            </main>

            <footer
                className="border-t-2 z-50 border-white p-5 fixed bottom-0 left-0 w-full bg-[#457EAC]">
                <nav>
                    <ul className="flex justify-between px-32 pl-150 pr-150">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
