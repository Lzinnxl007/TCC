export default function Logo({ size, className }) {
    return (
        <img style={{maxWidth: size}}
        src="/logo-tcc.png" 
        alt="logo" 
        className={`drop-shadow-xl ${className}`}/>
    )
}