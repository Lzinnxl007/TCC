
import Link from "next/link"
import Logo from "./Logo"
import { Instagram, Youtube } from "lucide-react"
export default function Footer() {

    return (
        <footer className="w-screen border-solid border-t-[1px] dark:border-zinc-400 h-auto text-zinc-900 bg-[var(--green)] dark:bg-zinc-900 dark:text-zinc-900">
            <header className="w-full h-full py-6 px-10">
                <nav className="w-full h-full flex justify-around md:justify-between items-center py-4">
                    <Link href="/" 
                    className="w-full flex justify-center items-center">
                        <div className="flex items-center gap-4 w-full justify-center md:mr-4">
                           
                            <Logo size={90} url="/white-logo.png"/>

                            <h1 className="font-extrabold text-3xl md:text-xl text-zinc-50">Desperdício Zero</h1>
                        </div>
                    </Link>
                </nav>
               
            </header>
            <div className="flex justify-evenly w-full mt-10 px-10 md:text-sm">
                    <div>
                        <ul>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/sobre">
                                    Quem somos
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/receitas">
                                    Receitas
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/IMC">
                                    Calcule seu IMC
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/sobre">
                                    Sobre nós
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/guia">
                                    Guia Sustentável
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/livros">
                                    Livros
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/videos">
                                    Videos
                                </Link>
                            </li>
                            <li className="transition text-zinc-100 dark:hover:text-zinc-50">
                                <Link href="/FAQ">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="mt-8 flex justify-center w-full py-2 font-semibold bg-[var(--light-grey)] dark:bg-zinc-950 dark:text-zinc-50 md:text-sm">
                <span>Copyright &copy; 2023 Desperdicio Zero</span>
            </div>
        </footer>
    )
}