import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function ErrorNotification() {
    return (
        <div>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            theme="light"/>
        </div>
    )
}