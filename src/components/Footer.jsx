'use client'

import { useTheme } from "next-themes"
import Link from "next/link"
import Logo from "./Logo"
import { Instagram, Youtube } from "lucide-react"
export default function Footer() {

    const { theme } = useTheme()

    return (
        <footer className={`w-screen h-auto ${theme == 'light' ? 'bg-[var(--green)] text-zinc-50' : 'bg-[var(--orange)] text-zinc-900'} dark:bg-[var(--orange)] dark:text-zinc-900`}>
            <header className="w-full h-full py-8 px-10">
                <nav className="w-full h-full flex justify-around md:justify-between items-center py-4">
                    <Link href="/">
                        <div className="flex items-center gap-4">
                            {theme == 'light' ? (
                                <Logo size={90} url="/white-logo.png"/>
                            ) : (
                                <Logo size={90} url="/logo.png"/>
                            )}
                            <h1 className="font-extrabold text-3xl md:text-xl">Desperdício Zero</h1>
                        </div>
                    </Link>
                    <ul className="flex items-center gap-2 md:gap-0">
                        <li className={`flex items-center justify-center w-10 h-10 rounded-full ${theme == 'light' ? 'hover:text-zinc-900' : 'hover:text-zinc-50'} transition duration-300 dark:text-zinc-900 dark:hover:text-zinc-700`}>
                            <Link href="#">
                                <Instagram />
                            </Link>
                        </li>
                        <li className={`flex items-center justify-center w-10 h-10 rounded-full ${theme == 'light' ? 'hover:text-zinc-900' : 'hover:text-zinc-50'} transition duration-300 dark:text-zinc-900 dark:hover:text-zinc-700`}>
                            <Link href="#">
                                <Youtube/>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
               
            </header>
            <div className="w-full flex mt-10 px-10">
                    <div className="">
                        <h1 className="text-lg font-semibold mb-2">Projeto Desperdicio Zero</h1>
                        <ul>
                            <li className={`${theme == 'light' ? 'text-zinc-50 hover:text-zinc-200' : 'text-zinc-900 hover:text-zinc-700 '} transition dark:text-zinc-900 dark:hover:text-zinc-700`}>
                                <Link href="sobre">
                                    Quem somos
                                </Link>
                            </li>
                            <li className={`${theme == 'light' ? 'text-zinc-50 hover:text-zinc-200' : 'text-zinc-900 hover:text-zinc-700 '} transition dark:text-zinc-900 dark:hover:text-zinc-700`}>
                                <Link href="receitas">
                                    Receitas
                                </Link>
                            </li>
                            <li className={`${theme == 'light' ? 'text-zinc-50 hover:text-zinc-200' : 'text-zinc-900 hover:text-zinc-700 '} transition dark:text-zinc-900 dark:hover:text-zinc-700`}>
                                <Link href="IMC">
                                    Calcule seu IMC
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className={`mt-8 flex justify-center w-full ${theme == 'light' ? 'bg-[var(--orange)] text-zinc-900' : 'bg-zinc-900 text-zinc-50'} py-4 font-semibold dark:bg-zinc-900 dark:text-zinc-50`}>
                <span>Copyright &copy; 2023 Desperdicio Zero</span>
            </div>
        </footer>
    )
}