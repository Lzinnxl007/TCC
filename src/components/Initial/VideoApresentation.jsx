'use client'


import PlayButton from "./PlayButton"
import { useEffect, useRef, useState } from "react"
import Volume from "./Volume"
export default function VideoApresentation() {

    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true)

    const muteVideo = () => {
        setMuted(!muted)
    }

    const video = useRef()

    const playVideo = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        if(playing) {
            video.current.play()
        } else {
            video.current.pause()
        }
    }, [playing])

    useEffect(() => {
        if(muted) {
            video.current.volume = 0
        } else {
            video.current.volume = 1
        }
    }, [muted])

    return (
        <div className="w-screen h-[50vw] lg:h-[80vw] flex flex-col items-center justify-center bg-[url('/video-apresentation-background.jpg')] bg-center bg-cover bg-no-repeat 
        px-10 md:px-6 ">
            <div className="relative z-0 group rounded flex items-center justify-center h-[70%] lg:h-[50%]">
                <PlayButton playVideo={playVideo} playing={playing}/>
                <video 
                ref={video}
                autoplay loop poster="apresentation-thumbnail.png"
                className="rounded outline-none mt-40 w-full h-full shadow-xl mb-40">
                    <source src="/apresentation.mp4" type="video/mp4"/>
                </video>
                <PlayButton playVideo={playVideo} playing={playing}/>
                <Volume muteVideo={muteVideo} muted={muted}/>
            </div>
        </div>
    )
}