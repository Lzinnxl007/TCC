
import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"
import ScrollToTop from "@/components/Default/ScrollToTop"
import Intro from "@/components/Initial/Intro"
import Main from "@/components/Initial/Main"
import Modal from "@/components/Initial/Modal"
import VideoApresentation from "@/components/Initial/VideoApresentation"


export default function Home() {

  return (
    <div className="min-h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <VideoApresentation/>
        <Footer/>
        <ScrollToTop/>
        <Modal/>
        
    </div>
  )
}
