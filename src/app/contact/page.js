"use client"
import Burger from "@/components/burger";
import Footer from "@/components/footer";
import {Github, Mail} from "lucide-react";

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

            <main className="bg-[#2D5A76] h-screen">
                <div className={"flex justify-center mt-80 text-3xl"}>
                    <div>
                        Name: Gian Loritz
                        <br></br>
                        <br></br>
                        Email: gianloritz@gmail.com
                        <br></br>
                        <br></br>
                        Mobil: 079 822 66 95
                        <br></br>
                        <br></br>
                        <br></br>
                        <a
                            href="https://github.com/Gianimon" target="_blank">Github
                        </a>
                    </div>
                </div>
            </main>
            <div></div>
        </div>
    )
}

