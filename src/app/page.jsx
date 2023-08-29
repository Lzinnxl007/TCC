'use client'

import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Main from "@/components/Main"


export default function Home() {


  return (
    <section className="h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <Intro/>
    </section>
  )
}
