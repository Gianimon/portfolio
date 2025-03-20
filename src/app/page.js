import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header>
                <nav>
                    <ul className="flex text-3xl">
                        <li className="font-bold flex-auto border-b border-b-black p-5">
                            <button>
                                &#9776;
                            </button>
                        </li>
                        <li className="font-bold flex-auto absolute left-1/2 transform -translate-x-1/2 border-b border-b-black p-5">
                            Gian Loritz
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </div>
            <div className={"mt-200"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </div>
            <footer
                className="border-t border-black p-5 fixed bottom-0 left-0 w-full">
                <nav>
                    <ul className="flex justify-between px-32 pl-150 pr-150">
                        <li><Link href={"/portfolio"}>Portfolio</Link></li>
                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/privacy"}>Privacy Policy</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
