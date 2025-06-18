"use client"
import Carousel from "@/components/carousel";
import Burger from "@/components/burger";
import Footer from "@/components/footer";
import SkillBars from "@/components/skillbar";

export default function AboutMe() {
    return (
        <div className="flex flex-col min-h-screen text-white bg-[#2D5A76]">
            {/* Header */}
            <header className="bg-[#457EAC] fixed w-full z-200">
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b-2 border-b-white p-5">
                            <Burger></Burger>
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 p-5">
                            Über Mich
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Platzhalter für Header-Höhe, damit Content nicht drunter rutscht */}
            <div className="h-[64px]" />

            <main className="flex flex-col">
                {/* Vertikal zentrierter Textblock mit voller Viewport-Höhe */}
                <section className="flex items-center h-screen">
                    <div className="ml-20 w-1/2 text-3xl">
                        Ich bin 17 Jahre alt. An der Kantonsschule Hottingen bin
                        ich
                        ein Schüler. In der Ausbildung bin ich als Informatiker
                        Applikationsentwickler. Mit eigenen Projekten konnte ich
                        meine Fähigkeiten als Applikationsentwickler verbessern.
                        <br/>
                        <br/>
                        In meiner Freizeit spiele ich sehr gerne Curling.
                        Unser Team, Baden-Lausanne spielt in der besten Liga der
                        Junioren.
                    </div>
                    <img src="https://placehold.co/500x500"
                         alt="Bild von Gian"
                         className={"w-100% h-100% ml-30"}/>
                </section>

                <div>
                    Hobbys
                </div>

                {/* Restlicher Content unter dem Textblock */}
                <section>
                    <Carousel/>
                </section>

                <section className="flex flex-col items-center py-10">
                    <h2 className="text-3xl mb-20">Skills</h2>
                    <SkillBars />
                </section>
            </main>

            <footer><Footer></Footer></footer>
        </div>
    );
}
