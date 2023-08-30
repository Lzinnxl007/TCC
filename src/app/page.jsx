'use client'

import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Main from "@/components/Main"
import { useEffect } from "react"


export default function Home() {

  const apiUrl = 'http://localhost:3000/api/recipes'

  useEffect(() => {
     fetch(apiUrl)
     .then(res => res.json())
     .then(data => console.log(data))
  }, [])

  return (
    <section className="h-screen bg-black overflow-hidden">
        <Header/>
        <Main/>
        <Intro/>
    </section>
  )
}
