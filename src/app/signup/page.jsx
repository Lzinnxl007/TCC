
import Header from "@/components/Default/Header"
import SignUpForm from "@/components/Authentication/SignupForm"
import Notification from "@/components/Notification/Notification"
export default function SignUp() {

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)]">
            <Header/>
            <SignUpForm />
            <Notification/>
        </div>
    )
}