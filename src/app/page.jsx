
import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"
import ScrollToTop from "@/components/Default/ScrollToTop"
import Intro from "@/components/Initial/Intro"
import Main from "@/components/Initial/Main"
import Modal from "@/components/Initial/Modal"
import ReviewCard from "@/components/Initial/ReviewCard"
import VideoApresentation from "@/components/Initial/VideoApresentation"

export default function Home() {

  return (
      <div className="min-h-screen bg-[var(--orange)] overflow-hidden">
          <Header/>
          <Main/>
          <VideoApresentation/>
          <div className="w-full h-[80vh] flex items-center justify-around py-10 bg-[var(--light-grey)] dark:bg-zinc-800">
            <ReviewCard
            name="Julia Dias"
            career="Nutricionista"
            image="https://img.freepik.com/free-photo/young-woman-holding-two-green-red-apple_23-2148076020.jpg?size=626&ext=jpg&uid=R66330385&ga=GA1.2.1125086435.1688662802&semt=ais"
            text="[citação]"/>

            <ReviewCard
            name=""
            career="Nutricionista"
            image=""
            text=""/>
          </div>
          <Footer/>
          <ScrollToTop/>
          <Modal/>
      </div>
  )
}
