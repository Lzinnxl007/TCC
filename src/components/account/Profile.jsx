'use client'

import { User } from "lucide-react"
import Cookies from "js-cookie"
import SetProfileImage from "./SetProfileImage"
import { useState } from "react"
export default function Profile() {

    const [selectImageShow, setSelectImageShow] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const closeSelectImage = () => {
        setSelectImageShow(false)
    }

    const openSelectImage = () => {
        setSelectImageShow(true)
    }

    return (
        <div className="flex items-center gap-6">
            <button onClick={openSelectImage}
            className="w-14 h-14 md:w-12 md:h-12 cursor-pointer rounded-full flex items-center justify-center border-solid 
            border-[3px] border-orange-400 overflow-hidden bg-zinc-200">
                {JSON.parse(Cookies.get('user')).photo ? (
                    <img src={JSON.parse(Cookies.get('user')).photo} alt="profile-image" 
                    className="w-full h-full object-center object-cover"/>
                ) : (
                    <User size={32} color="#111"/>
                )}
            </button>

            {selectImageShow && (
                <SetProfileImage 
                closeSelectImage={closeSelectImage}
                show={selectImageShow}/>
            )}
        </div>
    )
}