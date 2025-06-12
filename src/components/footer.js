import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer
                className="border-t-2 z-200 border-white p-5 fixed bottom-0 left-0 w-full bg-[#457EAC]">
                <nav>
                    <ul className="flex justify-between px-32 pl-150 pr-150">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Kontakt</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}