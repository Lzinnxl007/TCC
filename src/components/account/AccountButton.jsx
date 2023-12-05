import { User } from "lucide-react"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
export default function AccountButton() {

    const user = Cookies.get('user') && JSON.parse(Cookies.get('user'))

    return (
        <Link href="/perfil">
            <button
            className="w-14 h-14 md:w-16 md:h-16 cursor-pointer rounded-full flex items-center justify-center border-solid 
            border-[3px] border-orange-400 overflow-hidden bg-zinc-200">
                {user?.photo ? (
                    <Image src={user?.photo}
                    layout="responsive"
                    width={100}
                    height={100}/>
                ) : (
                    <User color="#111" size={36}/>
                )}
            </button>
        </Link>
    )
}
/*{JSON.parse(Cookies.get('user')).photo ? (
                    <img src={JSON.parse(Cookies.get('user')).photo} alt="profile-image" 
                    className="w-full h-full object-center object-cover"/>
                ) : (
                    <User size={32} color="#111"/>
                )} */