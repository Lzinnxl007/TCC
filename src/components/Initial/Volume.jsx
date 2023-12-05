'use client'


import { Volume2, VolumeX } from "lucide-react"
export default function Volume({ muted, muteVideo }) {
    return (
        <button onClick={muteVideo} 
        className="w-12 h-12 absolute bottom-0 -right-[14px] z-40">
            {!muted ? (
                <Volume2 color="#eee"/>
            ) : (
                <VolumeX color="#eee"/>
            )}
        </button>
    )
}