"use client"
import Carousel from "@/components/carousel";
import Burger from "@/components/burger";
import Footer from "@/components/footer";
import SkillBars from "@/components/skillbar";

export default function AboutMe() {
    return (
        <div className="flex flex-col min-h-screen text-white bg-[#2D5A76]">
            {/* Header */}
            <header className="bg-[#457EAC] fixed w-full z-50">
                <nav>
                    <ul className="flex text-xl sm:text-2xl md:text-3xl">
                        <li className="font-bold flex-auto border-b-2 border-b-white p-4 sm:p-5">
                            <Burger />
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 p-4 sm:p-5">
                            Über Mich
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Platzhalter für Header-Höhe */}
            <div className="h-[64px]" />

            <main className="flex flex-col">
                {/* Hero-Section */}
                <section className="flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen px-6 sm:px-12">
                    <div className="w-full lg:w-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-0 lg:ml-20">
                        Ich bin 18 Jahre alt. An der Kantonsschule Hottingen bin
                        ich ein Schüler. In der Ausbildung bin ich als Informatiker
                        Applikationsentwickler. Mit eigenen Projekten konnte ich
                        meine Fähigkeiten als Applikationsentwickler verbessern.
                        <br/>
                        <br/>
                        In meiner Freizeit spiele ich sehr gerne Curling.
                        Unser Team Baden-Lausanne spielt in der höchsten Juniorenliga der Schweiz.
                    </div>
                    <img
                        src="https://placehold.co/500x500"
                        alt="Bild von Gian"
                        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-lg lg:ml-12"
                    />
                </section>

                {/* Carousel */}
                <section className="px-4 sm:px-10 py-6">
                    <Carousel/>
                </section>

                {/* Skills */}
                <section className="flex flex-col items-center py-10 px-4">
                    <h2 className="text-2xl sm:text-3xl mb-10 sm:mb-20">Skills</h2>
                    <SkillBars />
                </section>
            </main>
        </div>
    );
}
