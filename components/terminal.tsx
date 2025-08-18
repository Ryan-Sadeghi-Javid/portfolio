"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [showTorus, setShowTorus] = useState(false)
  const [angle, setAngle] = useState(0)
  const [allowManualScroll, setAllowManualScroll] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = ["$ node math/torus-renderer.js", "Loading parametric equations...", "✓ Torus generator ready"]

  const generateTorus = (A: number, B: number) => {
    const width = 60
    const height = 30
    const R1 = 0.6
    const R2 = 1.2
    const K2 = 8
    const K1 = (width * K2 * 2.0) / (8 * (R1 + R2))

    const output = Array(height)
      .fill(null)
      .map(() => Array(width).fill(" "))
    const zbuffer = Array(height)
      .fill(null)
      .map(() => Array(width).fill(0))

    const cosA = Math.cos(A)
    const sinA = Math.sin(A)
    const cosB = Math.cos(B)
    const sinB = Math.sin(B)

    for (let theta = 0; theta < 6.28; theta += 0.07) {
      const costheta = Math.cos(theta)
      const sintheta = Math.sin(theta)

      for (let phi = 0; phi < 6.28; phi += 0.02) {
        const cosphi = Math.cos(phi)
        const sinphi = Math.sin(phi)

        const circlex = R2 + R1 * costheta
        const circley = R1 * sintheta

        const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB
        const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB
        const z = K2 + cosA * circlex * sinphi + circley * sinA

        const ooz = 1 / z

        const xp = Math.floor(width / 2 + K1 * ooz * x)
        const yp = Math.floor(height / 2 - K1 * ooz * y)

        const L =
          cosphi * costheta * sinB -
          cosA * costheta * sinphi -
          sinA * sintheta +
          cosB * (cosA * sintheta - costheta * sinA * sinphi)

        if (L > 0 && xp >= 0 && xp < width && yp >= 0 && yp < height && ooz > zbuffer[yp][xp]) {
          zbuffer[yp][xp] = ooz

          const luminance_index = Math.floor(L * 8)
          const chars = ".,-~:;=!*#$@"
          if (luminance_index >= 0 && luminance_index < chars.length) {
            output[yp][xp] = chars[luminance_index]
          }
        }
      }
    }

    return output.map((row) => row.join(""))
  }

  useEffect(() => {
    if (currentLine < commands.length) {
      const currentCommand = commands[currentLine]
      const timer = setTimeout(
        () => {
          if (currentChar < currentCommand.length) {
            setDisplayedLines((prev) => {
              const newLines = [...prev]
              newLines[currentLine] = currentCommand.slice(0, currentChar + 1)
              return newLines
            })
            setCurrentChar(currentChar + 1)
          } else {
            setTimeout(() => {
              setCurrentLine(currentLine + 1)
              setCurrentChar(0)
            }, 100)
          }
        },
        currentCommand.startsWith("$") ? 80 : 40,
      )

      return () => clearTimeout(timer)
    } else if (!showTorus) {
      setTimeout(() => {
        setShowTorus(true)
        setTimeout(() => {
          setAllowManualScroll(true)
        }, 1000)
      }, 500)
    }
  }, [currentLine, currentChar, commands, showTorus])

  useEffect(() => {
    if (showTorus) {
      const interval = setInterval(() => {
        setAngle((prev) => prev + 0.04)
      }, 50)

      return () => clearInterval(interval)
    }
  }, [showTorus])

  useEffect(() => {
    if (terminalRef.current && !allowManualScroll) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines, allowManualScroll])

  const torusLines = showTorus ? generateTorus(angle, angle * 0.5) : []

  return (
    <Card className="bg-gray-900 text-green-400 p-8 font-mono text-base w-full max-w-5xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-400 text-lg">terminal</div>
      </div>
      <div ref={terminalRef} className="h-96 overflow-y-auto">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2 text-base">
            {line}
            {index === currentLine && <span className="animate-pulse">_</span>}
          </div>
        ))}

        {showTorus && (
          <div className="mt-6">
            <div className="text-cyan-400 mb-3 text-base">
              Parametric Torus Renderer - By Ryan Sadeghi-Javid
            </div>
            <div className="text-yellow-400 text-sm mb-3">
              Major Radius: 0.6 | Minor Radius: 1.2 | Resolution: 60x30 | Rotation: {(angle * 57.3).toFixed(1)}°
            </div>
            <div className="bg-black p-8 rounded border border-gray-600">
              <div className="text-green-300 text-xs leading-tight font-mono">
                {torusLines.map((line, index) => (
                  <div key={index} className="whitespace-pre h-3">
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-green-400 mt-3 text-sm">
              Parametric Surface | Phong Shading | Real-time 3D Projection
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
