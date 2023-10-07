'use client'

import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"
import ScrollToTop from "@/components/Default/ScrollToTop"
import Intro from "@/components/Initial/Intro"
import Main from "@/components/Initial/Main"
import Modal from "@/components/Initial/Modal"
import VideoApresentation from "@/components/Initial/VideoApresentation"
import { NextSeo } from 'next-seo'

export default function Home() {

  return (
    <div className="min-h-screen bg-[var(--orange)] overflow-hidden">
      <NextSeo
        title="Desperdício Zero"
        description="Cuide da sua saúde e do planeta!"
        openGraph={{
          title: 'Desperdício Zero',
          description: 'Cuide da sua saúde e do planeta!',
          images: [
            {
              url: '/next-seo-image.png',
              width: 1200,
              height: 630,
              alt: 'Desperdício Zero Imagem',
            },
          ],
        }}>
          <Header/>
          <Main/>
          <VideoApresentation/>
          <Footer/>
          <ScrollToTop/>
          <Modal/>
      </NextSeo>
       
    </div>
  )
}
