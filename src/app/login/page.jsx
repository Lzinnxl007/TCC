'use client'

import Header from "@/components/Default/Header"
import LogInForm from "@/components/authentication/LoginForm"
import Notification from "@/components/Notification/Notification"
export default function LogIn() {

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Header/>
            <LogInForm/>
            <Notification/>
        </div>
    )
}