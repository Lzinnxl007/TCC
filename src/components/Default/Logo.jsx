import Image from "next/image"
export default function Logo({ url }) {
    return (
        <Image
        src={url} 
        alt="logo" 
        layout="responsive"
        width={100}
        height={100}
        className={`drop-shadow-xl w-full max-w-[75px] sm:max-w-[60px]`}/>
    )
}