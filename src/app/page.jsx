
import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"
import Intro from "@/components/Initial/Intro"
import Main from "@/components/Initial/Main"
import VideoApresentation from "@/components/Initial/VideoApresentation"


export default function Home() {

  return (
    <div className="min-h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <VideoApresentation/>
        <Footer/>
        <Intro/>
    </div>
  )
}
