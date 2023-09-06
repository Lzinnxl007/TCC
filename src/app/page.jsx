'use client'

import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Main from "@/components/Main"

import { GetLightMode } from "@/utils/UseLightMode"
export default function Home() {

  const theme = GetLightMode('lightMode')

  console.log(theme)

  return (
    <section className="h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <Intro/>
    </section>
  )
}
