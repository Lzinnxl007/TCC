export default function Logo({ size, className, url }) {
    return (
        <img style={{maxWidth: size}}
        src={url} 
        alt="logo" 
        className={`drop-shadow-xl ${className}`}/>
    )
}