
import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Main from "@/components/Main"
import VideoApresentation from "@/components/VideoApresentation"


export default function Home() {

  return (
    <div className="min-h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <VideoApresentation/>
        <Intro/>
    </div>
  )
}
