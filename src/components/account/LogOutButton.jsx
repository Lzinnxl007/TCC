'use client'

import { LogOut, MoreVertical } from "lucide-react"
import { useState } from "react"
import Cookies from "js-cookie"
export default function LogOutButton() {

    const [showLogOut, setShowLogOut] = useState(false)

    const logOut = () => {
        Cookies.remove('token') 
        Cookies.remove('user')
        window.history.back()
    }

    const handleShowLogOut = () => {
        setShowLogOut(!showLogOut)
    }


    return (
        <button onClick={handleShowLogOut}
         className="relative">
            {showLogOut && (
                <button onClick={logOut}
                className="flex items-center gap-2 text-zinc-900 px-4 py-1.5 rounded bg-zinc-100 absolute translate-y-10">
                    <LogOut/>
                    <p>Sair</p>
                </button>
            )}
            <MoreVertical color="#eee"/>
        </button>
    )
}