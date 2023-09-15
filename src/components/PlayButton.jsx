
import { Play } from "lucide-react"
export default function PlayButton({ playVideo, play }) {
    return (
        <button onClick={playVideo} 
        className={`w-20 aspect-square rounded-full ${play ? 'hidden' : 'flex'} items-center justify-center
        bg-zinc-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40 hover:bg-zinc-300 transition 
        shadow-xl border-none`}>
            <Play className="fill-zinc-950 stroke-zinc-950 translate-x-[1px]"
            size={32}/>
        </button>
    )
}