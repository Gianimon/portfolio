"use client"
import Carousel from "@/components/carousel";
import Burger from "@/components/burger";
import Link from "next/link";
import Footer from "@/components/footer";
import SkillBars from "@/components/skillbar";

export default function AboutMe() {

    return (
        <div className="flex flex-col h-screen text-white">
            {/* Header */}
            <header className="bg-[#457EAC] fixed w-full z-200">
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b-2 border-b-white p-5">
                            <Burger></Burger>
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 p-5">
                            About Me
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="bg-[#2D5A76] h-1000">
                <div className={"mt-20 mb-17"}>
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
                <div><Carousel></Carousel></div>


                <div className="flex flex-col items-center py-10">
                    <div className="text-3xl mb-20">
                        Skills
                    </div>
                    <div><SkillBars></SkillBars></div>
                </div>
            </main>

            <footer><Footer></Footer></footer>
        </div>
    )
}