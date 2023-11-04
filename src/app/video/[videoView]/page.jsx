
import Header from "@/components/Default/Header"
import VideoPlayer from "@/components/Videos/VideoPlayer"
import VideoRecomendationCard from "@/components/Videos/VideoRecomendationCard"
import { GetVideos } from "@/utils/videos/GetVideos"
export default async function Video() {

    const videos = await GetVideos()

    return (
        <section className="w-screen min-h-[150vh] bg-[var(--light-grey)] ">
            <Header/>
            <div className="flex lg:flex-col lg:items-center gap-8 p-8">
                <div className="w-full min-w-[70%] lg:max-w-full">
                    <VideoPlayer videos={videos}/>
                </div>
                
                <div className="flex flex-col w-auto gap-8 items-center lg:mt-10">
                    {videos?.map((video) => {
                        return (
                            <VideoRecomendationCard
                            id={video.id}
                            videos={videos}/>
                        )
                    })}
                </div>
                
            </div>
        </section>
    )
}
