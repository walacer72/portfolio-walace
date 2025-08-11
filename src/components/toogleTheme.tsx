"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Evita renderização até que o tema esteja sincronizado no cliente
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-none rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="" />
      ) : (
        <Moon className="" />
      )}
    
    </Button>
  )
}
