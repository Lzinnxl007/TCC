import Header from "@/components/Default/Header"
import VideoCard from "@/components/Videos/VideoCard"

export default function Videos() {
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
            <div className="px-10 pt-10 w-full mx-auto">
                <VideoCard url="https://www.youtube.com/embed/TvnQMk_FqqU?si=gX16Y1tVX9YYrNxr?fs=1&controls=1"
                title="Curso de Nutrição Básica I - Conceitos Iniciais"/>
            </div>
        </section>
    )
}