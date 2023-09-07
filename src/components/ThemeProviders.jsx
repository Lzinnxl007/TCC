'use client'

import { ThemeProvider } from 'next-themes'
export default function ThemeProviders({ children }) {
    return (
        <ThemeProvider 
        enableSystem
        forcedTheme={children.theme || null}>
            {children}
        </ThemeProvider>
    )
}