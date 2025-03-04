"use client"

import { ChevronDown } from "lucide-react"

export function ScrollButton() {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        })
      }}
      className="animate-bounce"
    >
      <ChevronDown className="h-8 w-8" />
    </button>
  )
} 