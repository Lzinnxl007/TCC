'use client'

import Image from "next/image"
import Link from "next/link"
import { Children } from "react"

import { useTrail, a } from '@react-spring/web'

const Trail = ({ open, children }) => {
  const items = Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open && window.innerWidth > 767 ? 70 : 50,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height }, index) => (
        <a.div key={index} className="text-7xl md:text-5xl md:text-center font-bold">
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
export default function Main() {
    return (
        <main className="w-screen h-[91vh] flex z-20
        items-center justify-evenly md:flex-col-reverse overflow-hidden  dark:bg-zinc-900 dark:text-zinc-50 bg-[var(--light-grey)]  pb-10">
            <div className="flex flex-col gap-4 md:flex md:flex-col md:items-center">
            <Trail open={open}>
                <p>Se <span className="text-[var(--green)]">Alimente</span></p>
                <p>de Forma</p>
                <p><span className="text-[var(--green)]">Sustentável</span></p>
            </Trail>
                <p className="max-w-md md:max-w-sm text-sm md:text-center">Desperdício Zero ensina nutrição consciente e uso sustentável de alimentos, evitando desperdícios, aproveitando ingredientes e escolhendo alimentos sazonais, visando benefícios pessoais e ambientais.</p>
                <Link href="/sobre">
                    <button className="rounded px-4 py-1.5 text-zinc-50 
                    bg-[var(--green)] font-medium hover:opacity-90 transition">
                        Descobrir
                    </button>
                </Link>
            </div>
            <div>
                <Image 
                src="/main-image.png" 
                alt="complementar" 
                layout="responsive"
                width={100}
                height={100}
                loading="lazy"
                className="max-w-2xl md:max-w-md"/>
            </div>
        </main>
    )
}
/*<h1 className="text-7xl md:text-5xl font-bold leading-[70px] md:text-center text-zinc-900 dark:text-zinc-50 w-full max-w-md">
                    Se <span className="text-[var(--green)]">Alimente</span> de Forma <span className="text-[var(--green)]">Sustentável</span>
                </h1> */