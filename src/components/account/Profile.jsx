'use client'

import { User } from "lucide-react"
import LogOutButton from "./LogOutButton"
import Cookies from "js-cookie"
import SetProfileImage from "./SetProfileImage"
import { useState } from "react"
export default function Profile() {

    const [selectImageShow, setSelectImageShow] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const logout = () => {
        Cookies.remove('token') 
        Cookies.remove('user')
        window.location.reload()
    }

    const closeSelectImage = () => {
        setSelectImageShow(false)
    }

    const openSelectImage = () => {
        setSelectImageShow(true)
    }

    return (
        <div className="flex items-center gap-6">
            <button onClick={logout}>
                <LogOutButton/>
            </button>
            <button onClick={openSelectImage}
            className="w-14 h-14 cursor-pointer rounded-full flex items-center justify-center border-solid 
            border-2 border-zinc-50 overflow-hidden">
                {Cookies.get('user') ? (
                    <img src={JSON.parse(Cookies.get('user')).photo} alt="profile-image" 
                    className="w-full h-full object-center object-cover"/>
                ) : (
                    <User size={32}/>
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