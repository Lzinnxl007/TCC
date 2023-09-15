'use client'


import PlayButton from "./PlayButton"
import { useRef, useState } from "react"
export default function VideoApresentation() {

    const [play, setPlay] = useState(false)

    const video = useRef()

    const playVideo = () => {
        video.current.play()
        setPlay(true)
    }

    return (
        <div className="w-screen h-[50vw + 40vh] flex flex-col items-center justify-center bg-[var(--green)] 
        md:px-10 py-8">
            <h1 className="text-center my-16 md:my-10 text-8xl font-semibold md:text-3xl">
                O Projeto Desperdício Zero
            </h1>
            <div className="relative z-0">
                <PlayButton playVideo={playVideo} play={play}/>
                <video ref={video}
                autoplay poster="apresentation-thumbnail.png"
                className="rounded overflow-hidden outline-none mt-4 w-full h-full">
                    <source src="/apresentation.mp4" type="video/mp4"/>
                    
                </video>
            </div>
        </div>
    )
}