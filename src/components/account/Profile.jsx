'use client'

import { User } from "lucide-react"
import LogOutButton from "./LogOutButton"
import Cookies from "js-cookie"
import SetProfileImage from "./SetProfileImage"
export default function Profile() {

    const logout = () => {
        Cookies.remove('token') 
        window.location.reload()
    }

    return (
        <div className="flex items-center gap-6">
            <button onClick={logout}>
                <LogOutButton/>
            </button>
            <div
            className="w-14 h-14 cursor-pointer rounded-full flex items-center justify-center border-solid 
            border-2 border-zinc-50">
                <User size={32}/>
            </div>

            <SetProfileImage/>
        </div>
    )
}