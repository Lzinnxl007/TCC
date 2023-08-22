
import LoginForm from "@/components/LoginForm"
import Logo from "@/components/Logo"
export default function Login() {
    return (
        <section className="w-screen h-screen 
        bg-[url('/login-background.jpg')] bg-cover bg-left">
            <Logo size={200} className="absolute left-1/2 -translate-x-1/2 top-40"/>
            <LoginForm />
        </section>
    )
}