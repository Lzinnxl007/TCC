'use client'

import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from "./Logo"
import AuthButton from './AuthButton'
import LogOutButton from '../account/LogOutButton'
import Profile from '../account/Profile'
import Cookies from "js-cookie"
export default function Header() {


    const token = Cookies.get('token')

    const [menuShow, setMenuShow] = useState(false)
    const [isDark, setIsDark] = useState(null)

    const openCloseMenu = () => {
        setMenuShow(!menuShow)
    }

    useEffect(() => {
        if(menuShow) {
            window.document.body.style.overflow = 'hidden'
        }
        else window.document.body.style.overflow = 'scroll'
    }, [menuShow])

    useEffect(() => {
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])


    const logout = () => {
        Cookies.remove('token') 
        Cookies.remove('user')
        window.location.reload()
    }


    return (
        <header className="h-[10vh] bg-[var(--light-grey)] text-zinc-50
         dark:bg-zinc-900 dark:text-zinc-50 overflow-hidden">
            <nav className="w-full h-full flex items-center justify-around z-20 py-4">
            <a href="/">
                <div className="flex items-center gap-4 md:gap-2">
                        {!isDark ? (
                            <Logo size={80} url="/logo.png"/>
                        ) : (
                            <Logo size={70} url="/white-logo.png"/>
                        )}
                        <p className="text-3xl font-bold whitespace-nowrap md:text-2xl text-zinc-900 dark:text-zinc-50">Desperdício 
                            <span className="text-[var(--green)]">Zero</span>
                        </p>
                    </div>
               </a>
               <ul className={`flex items-center justify-center gap-6 font-medium text-lg w-auto text-zinc-900
                md:absolute md:flex-col md:bg-[var(--light-grey)] md:shadow-xl md:dark:bg-zinc-700  md:justify-normal md:h-[91vh] md:px-6 md:py-8 md:transition-right md:duration-500 md:top-[10vh] dark:text-zinc-50
                md:z-50 ${menuShow ? 'md:flex md:right-0' : 'md:hidden md:-right-full'}`}>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/">Início</a> 
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/sobre">Sobre Nós</a>
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/receitas">Receitas</a>
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/IMC">IMC</a>
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/livros">Livros</a>
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/videos">Videos</a>
                    </li>
                    <li className="md:dark:hover:text-zinc-700  transition ">
                        <a href="/FAQ">FAQ</a>
                    </li>
                    {!token && (
                        <li className="translate-x-12 flex items-center gap-6 md:flex-col md:translate-x-0">
                            <AuthButton
                            type="primary"
                            method="Entrar"
                            destiny="/login"/>

                            <AuthButton
                            type="secondary"
                            method="Cadastrar"
                            destiny="/signup"/>
                        </li>
                    )}
                    {Cookies.get('token') && (
                        <button onClick={logout}
                        className="translate-x-32 md:translate-x-0">
                            <LogOutButton/>
                        </button>
                    )}
                </ul>
                {token && (
                    <Profile/>
                )}
                <button onClick={openCloseMenu}
                className="hidden md:block cursor-pointer z-10 md:-translate-x-4">
                    <Menu size={36} className="fill-zinc-900 dark:fill-zinc-50"/>
                </button>
            </nav>
        </header>
    )
}