"use client"
import Burger from "@/components/burger";
import Footer from "@/components/footer";

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
                    <img src= "/foto_rechts2.jpg"
                         alt="Bild von Gian"
                         className={"w-sm h-sm ml-30"}/>
                    <div className=" ml-20 mr-30 text-2xl">
                        <div className="text-5xl mb-10">
                            Willkommen!
                        </div>
                        <div>
                            Mein Name ist Gian Loritz.
                            Schön, dass Sie mein Portfolio besuchen.
                        </div>
                    </div>
                </div>
            </main>
        </div>
)
}
