'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      const glowElement = document.querySelector('.cursor-glow') as HTMLElement
      if (glowElement) {
        glowElement.style.opacity = '0.9'
      }
    }

    const handleMouseLeave = () => {
      const glowElement = document.querySelector('.cursor-glow') as HTMLElement
      if (glowElement) {
        glowElement.style.opacity = '0'
      }
    }

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    />
  )
}