'use client'

import Cookies from "js-cookie"
import { User } from "lucide-react"
import { useState } from "react"
import SetProfileImage from "./SetProfileImage"
import Image from "next/image"
import LogOutButton from "./LogOutButton"
export default function Profile() {

    const user = Cookies.get('user') && JSON.parse(Cookies.get('user'))

    const [showSelectImage, setShowSelectImage] = useState(false)

    const openSelectImage = () => {
        setShowSelectImage(true)
    }

    const closeSelectImage = () => {
        setShowSelectImage(false)
    }

    return (
        <div className="w-full max-w-sm rounded-2xl absolute top-[55%] left-1/2 -translate-y-1/2 -translate-x-1/2 bg-orange-400 pb-4">
            <div className="absolute top-4 left-3">
                <LogOutButton/>
            </div>
            {showSelectImage && (
                <SetProfileImage
                closeSelectImage={closeSelectImage}
                show={showSelectImage}/>
            )}
            <button onClick={openSelectImage}
             className="w-1/3 aspect-square rounded-full mx-auto border-zinc-100 borde-solid border-[2px] flex items-center justify-center mt-10 bg-zinc-300 overflow-hidden">
            {user?.photo ? (
                    <Image src={user.photo}
                    layout="responsive"
                    width={100}
                    height={100}/>
                ) : (
                    <User color="#111" size={80}/>
                )}
            </button>
            <div className="text-zinc-50 px-10 mx-auto w-full mt-10 pb-10 space-y-6">
               <div className="border-solid border-zinc-100 border-b-[1px]">
                    <span className="opacity-60">Nome</span>
                    <p>{user?.name}</p>
               </div>

                <div className="border-solid border-zinc-100 border-b-[1px]">
                    <span className="opacity-60">E-mail</span>
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    )
}