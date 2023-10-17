import Image from "next/image"
export default function Logo({ size, className, url }) {
    return (
        <Image style={{maxWidth: size}}
        src={url} 
        alt="logo" 
        layout="responsive"
        width={100}
        height={100}
        className={`drop-shadow-xl ${className}`}/>
    )
}