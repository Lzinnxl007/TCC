import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SucessNotification() {

    return (
        <div className="absolute top-20 right-16">
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