

import { LogOut } from "lucide-react"
export default function LogOutButton() {
    return (
        <button className="flex items-center gap-2 mr-6">
            <p>Sair</p>
            <LogOut/>
        </button>
    )
}