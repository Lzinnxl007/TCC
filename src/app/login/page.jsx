'use client'

import Header from "@/components/Default/Header"
import LogInForm from "@/components/authentication/LoginForm"
import { toast } from "react-toastify"
import SucessNotification from "@/components/Notification/SucessNotification"
export default function LogIn() {

    const notify = () => toast("Login realizado com sucesso!")

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)]">
            <Header/>
            <LogInForm notify={notify}/>
            <SucessNotification/>
        </div>
    )
}