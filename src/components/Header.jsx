import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-20 bg-[var(--green)] ">
            <nav className="w-full h-full flex items-center justify-around">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="logo"
                    className="w-[90px]" />
                    <span className="text-2xl font-bold">Desperdicio Zero</span>
                </div>
                <ul className="flex items-center gap-6 font-medium text-lg">
                    <li>
                        <Link href="/cardapio">Cardapio</Link>
                    </li>
                    <li>
                        <Link href="/Receitas">Receitas</Link>
                    </li>
                    <li>
                        <Link href="/Dahsboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}