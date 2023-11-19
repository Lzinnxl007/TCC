import Header from "@/components/Default/Header"
import Loading from "@/components/Default/Loading"
import Profile from "@/components/account/Profile"

export default function Perfil() {
    return (
        <section className="w-screen h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Loading/>
            <Header/>
            <Profile/>
        </section>
    )
}