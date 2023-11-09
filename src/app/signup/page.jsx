
import Header from "@/components/Default/Header"
import SignUpForm from "@/components/authentication/SignupForm"
import Notification from "@/components/Notification/Notification"
export default function SignUp() {

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Header/>
            <SignUpForm />
            <Notification/>
        </div>
    )
}