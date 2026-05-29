import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }
            className="
        w-10 h-10
        rounded-xl
        border border-zinc-800
        flex items-center justify-center
        hover:bg-zinc-900
        transition
      "
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </button>
    )
}