'use server'

import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"
export default async function Locals({ locals }) {

    return (
        <div className="mt-20 grid grid-cols-fit w-full h-auto gap-10 pb-20">
            {locals?.map((item, index) => {
              return (
               <button key={index} className="w-full h-auto flex flex-col items-center rounded-xl border-solid border-2 border-orange-400 overflow-hidden">
                  <Link href={`https://www.google.com/maps/search/?api=1&query=${item.name}`}
                  target="_blank"
                  className="w-full">
                    <div className="w-full max-h-[300px] flex items-center overflow-hidden rounded-t-xl -translate-y-2.5">
                        <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos?.[0].photo_reference}&key=${process.env.GOOGLE_CLOUD_API_KEY}`}
                        layout="responsive"
                        width={100}
                        height={100}
                        loading="lazy"
                        className="w-full h-full"/>
                    </div>
                    <div className="w-full text-left pt-4 flex flex-col px-4 pb-6">
                        <h1 className="float-left font-semibold text-left">
                            {item?.name}
                        </h1>
                        <p className="mt-4 italic">
                            {item?.vicinity}
                        </p>
                        <div className="mt-2 flex items-center gap-1">
                            <Star size={20}
                            className="fill-yellow-500 stroke-yellow-500"/>
                            <span className="text-sm">
                                {item?.rating}
                            </span>
                        </div>
                    </div>
                  </Link>
               </button>
              )
            })}
        </div>
    )
}