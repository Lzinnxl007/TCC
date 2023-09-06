

export function SetLightMode(mode) {
    localStorage.setItem('lightMode', mode)
}

export function GetLightMode(value) {
    if(localStorage.getItem(value)) {
        return localStorage.getItem(value)
    }
}