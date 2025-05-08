"use client"
import Burger from "@/components/burger";
import Footer from "@/components/footer";

export default function Privacy() {

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
                            Privacy Policy
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

            <footer><Footer></Footer></footer>
        </div>
    )
}