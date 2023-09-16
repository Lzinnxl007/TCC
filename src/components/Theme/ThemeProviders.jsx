'use client'

import { ThemeProvider } from 'next-themes'
export default function ThemeProviders({ children }) {
    return (
        <ThemeProvider >
            {children}
        </ThemeProvider>
    )
}