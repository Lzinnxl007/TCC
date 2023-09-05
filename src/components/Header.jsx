'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from "./Logo"
export default function Header() {

    const [menuShow, setMenuShow] = useState(false)

    const openCloseMenu = () => {
        setMenuShow(!menuShow)
    }

    useEffect(() => {
        if(menuShow) {
            window.document.body.style.overflow = 'hidden'
        }
        else window.document.body.style.overflow = 'scroll'
    }, [menuShow])

    return (
        <header className="w-screen h-[10vh] bg-[var(--green)] overflow-hidden">
            <nav className="w-full h-full flex items-center justify-around z-20 py-4">
               <Link href="/">
                <div className="flex items-center gap-4 md:gap-2">
                        <Logo size={90}/>
                        <span className="text-2xl font-bold whitespace-nowrap">Desperdício Zero</span>
                    </div>
               </Link>
                <ul className={`flex items-center justify-center gap-6 font-medium text-lg w-[40vw]
                md:absolute md:flex-col md:bg-[#FBEEDB] md:justify-normal md:h-[91vh] md:px-6 
                md:py-8 md:rounded md:transition-right md:duration-500 md:top-[10vh]
                md:z-50 ${menuShow ? 'md:flex md:right-0' : 'md:hidden md:-right-full'}`}>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/cardapio">Cardapio</Link> 
                    </li>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/receitas">Receitas</Link>
                    </li>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/IMC">IMC</Link>
                    </li>
                </ul>
                <button onClick={openCloseMenu}
                className="hidden md:block cursor-pointer z-10">
                    <Menu size={36}/>
                </button>
            </nav>
        </header>
    )
}