import Header from "@/components/Default/Header"
import VideoCard from "@/components/Videos/VideoCard"
import { GetVideos } from "@/utils/videos/GetVideos"

export default async function Videos() {

    const videos = await GetVideos()

    return (
        <section className="w-screen min-h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Header/>
            <div className="mt-10">
                <h1 className="text-5xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 my-3 text-center">
                    Videos
                </h1>
                <p className="font-medium text-zinc-700 dark:text-zinc-200 text-center md:px-8">
                    Aprenda a ter uma Vida mais Saúdavel com Videos Educativos
                </p>
            </div>
            <div className="px-10 pt-10 w-full mx-auto grid grid-cols-fit gap-y-8">
                {videos?.map((video) => {
                    return (
                        <VideoCard 
                        key={video.id}
                        video={video}/>
                    )
                })}
                
            </div>
        </section>
    )
}