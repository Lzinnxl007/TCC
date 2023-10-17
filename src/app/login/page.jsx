'use client'

import Header from "@/components/Default/Header"
import LogInForm from "@/components/Authentication/LoginForm"
import Notification from "@/components/Notification/Notification"
export default function LogIn() {

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)]">
            <Header/>
            <LogInForm/>
            <Notification/>
        </div>
    )
}