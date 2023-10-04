
import Header from "@/components/Default/Header"
import SignUpForm from "@/components/authentication/SignupForm"
import SucessNotification from "@/components/Notification/SucessNotification"
export default function SignUp() {

    return (
        <div className="w-screen h-screen bg-[var(--light-grey)]">
            <Header/>
            <SignUpForm />
            <SucessNotification/>
        </div>
    )
}