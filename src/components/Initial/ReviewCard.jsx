import Image from "next/image";

export default function ReviewCard({ image, text, name, career }) {
    return (
        <div className="w-full h-[500px] max-w-xs rounded-2xl bg-zinc-50 dark:bg-zinc-200 dark:bg-[var(--light-grey)] shadow-xl relative mt-16 ">
            <div className="w-2/3 aspect-square rounded-full -translate-y-[40%] mx-auto overflow-hidden h-auto  shadow-lg">
                <Image src={image} alt="person-image"
                layout="responsive"
                width={100}
                height={100}
                className="w-full h-full" />
            </div>
            <div className="w-full px-4 py-8 flex flex-col items-center h-full -translate-y-20">
               <div className="-translate-y-6 my-4">
                <h2 className="text-center text-lg font-semibold">
                        {name}
                    </h2>
                    <span className="my-1 text-sm text-center">
                        {career}
                    </span>
               </div>
                <p className="text-center px-1">
                    {text}
                </p>
            </div>
        </div>
    )
}