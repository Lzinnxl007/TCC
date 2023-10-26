
import Header from "@/components/Default/Header"
import VideoPlayer from "@/components/Videos/VideoPlayer"
import { GetVideos } from "@/utils/video/GetVideos"
export default async function Video() {

    const videos = await GetVideos()

    return (
        <section className="w-screen min-h-[150vh]">
            <Header/>
            <div className="flex lg:flex-col items-center gap-8 p-8">
                <VideoPlayer/>
                <div>
                    
                </div>
            </div>
        </section>
    )
}
