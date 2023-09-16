
import { Play, Pause } from "lucide-react"
export default function PlayButton({ playVideo, playing }) {
    return (
        <button onClick={playVideo} 
        className="w-20 md:w-14 aspect-square rounded-full items-center justify-center flex invisible bg-zinc-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40 hover:bg-zinc-300 transition duration-300
        shadow-xl border-none group-hover:visible">
            {!playing ? (
                <Play className="fill-zinc-950 stroke-zinc-950 translate-x-[1px]"
                size={24}/>
            ) : (
                <Pause className="fill-zinc-950 stroke-zinc-950 translate-x-[1px]"
                size={24}/>
            )}
        </button>
    )
}