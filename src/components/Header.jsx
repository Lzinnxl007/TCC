'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { useState } from 'react'
export default function Header() {

    const [menuShow, setMenuShow] = useState(false)

    const openCloseMenu = () => {
        setMenuShow(!menuShow)
    }

    return (
        <header className="w-full h-20 bg-[var(--green)]">
            <nav className="w-full h-full flex items-center justify-around relative z-20">
               <Link href="/">
                <div className="flex items-center gap-4 md:gap-2">
                        <img src="/logo.png" alt="logo"
                        className="w-[90px]" />
                        <span className="text-2xl font-bold whitespace-nowrap">Desperdício Zero</span>
                    </div>
               </Link>
                <ul className={`flex items-center gap-6 font-medium text-lg md:absolute md:flex-col md:items-start md:bg-[#FBEEDB] md:px-6 md:py-4 md:rounded md:right-0 md:transition-top md:duration-500 md:z-0 ${menuShow ? 'md:visible md:top-20' : 'md:invisible md:-top-full'}`}>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/cardapio">Cardapio</Link>
                    </li>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/Receitas">Receitas</Link>
                    </li>
                    <li className="hover:text-zinc-800 transition">
                        <Link href="/Dahsboard">Dashboard</Link>
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