export default function Logo({ size, className }) {
    return (
        <img style={{maxWidth: size}}
        src="/logo.png" 
        alt="logo" 
        className={`drop-shadow-xl ${className}`}/>
    )
}