
import Link from "next/link"
import Logo from "./Logo"
import { Instagram, Youtube } from "lucide-react"
export default function Footer() {

    return (
        <footer className="w-screen h-auto text-zinc-900 bg-[var(--green)] dark:bg-[var(--orange)] dark:text-zinc-900">
            <header className="w-full h-full py-4 px-10">
                <nav className="w-full h-full flex justify-around md:justify-between items-center py-4">
                    <Link href="/">
                        <div className="flex items-center gap-4">
                           
                            <Logo size={90} url="/white-logo.png"/>

                            <h1 className="font-extrabold text-3xl md:text-xl text-zinc-50">Desperdício Zero</h1>
                        </div>
                    </Link>
                    <ul className="flex items-center gap-2 md:gap-0">
                        <li className="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 text-zinc-50 hover:text-zinc-200  dark:text-zinc-900 dark:hover:text-zinc-700">
                            <Link href="#">
                                <Instagram />
                            </Link>
                        </li>
                        <li className="flex items-center justify-center w-10 h-10 rounded-full  transition duration-300 dark:text-zinc-900 dark:hover:text-zinc-700 text-zinc-50 hover:text-zinc-200 ">
                            <Link href="#">
                                <Youtube/>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
               
            </header>
            <div className="w-full flex mt-10 px-10 ml-[16vw] lg:ml-[12vw] md:ml-[3vw]">
                    <div className="">
                        <h1 className="text-lg font-semibold mb-2 text-zinc-50">Projeto Desperdicio Zero</h1>
                        <ul>
                            <li className="transition text-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-700">
                                <Link href="/sobre">
                                    Quem somos
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-700">
                                <Link href="/receitas">
                                    Receitas
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-700">
                                <Link href="/IMC">
                                    Calcule seu IMC
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-700">
                                <Link href="/sobre">
                                    Sobre nós
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="mt-8 flex justify-center w-full py-4 font-semibold bg-[var(--light-grey)] dark:bg-zinc-900 dark:text-zinc-50">
                <span>Copyright &copy; 2023 Desperdicio Zero</span>
            </div>
        </footer>
    )
}