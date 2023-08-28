'use client'

import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Main from "@/components/Main"


export default function Home() {


  return (
    <section className="min-h-screen bg-black">
        <Header/>
        <Main/>
        <Intro/>
    </section>
  )
}
