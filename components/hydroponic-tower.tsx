"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Droplets, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HydroponicTower() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null)

  const levels = [
    { id: 1, value: 1200, label: "USDC", color: "#2775ca", growth: 12, chain: "Ethereum" },
    { id: 2, value: 800, label: "WETH", color: "#627eea", growth: 8, chain: "Arbitrum" },
    { id: 3, value: 600, label: "DAI", color: "#f5ac37", growth: 15, chain: "Base" },
    { id: 4, value: 400, label: "GHO", color: "#b06fff", growth: 5, chain: "Ethereum" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    updateSize()

    let animationFrame: number
    let rotation = 0

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw central tower structure
      const towerWidth = 40
      const towerHeight = height * 0.7
      const towerTop = centerY - towerHeight / 2

      // Tower gradient (metallic/hydroponic system)
      const towerGradient = ctx.createLinearGradient(centerX - towerWidth / 2, 0, centerX + towerWidth / 2, 0)
      towerGradient.addColorStop(0, "#1f2937")
      towerGradient.addColorStop(0.5, "#374151")
      towerGradient.addColorStop(1, "#1f2937")
      ctx.fillStyle = towerGradient
      ctx.fillRect(centerX - towerWidth / 2, towerTop, towerWidth, towerHeight)

      // Tower highlights
      ctx.strokeStyle = "#14b8a6"
      ctx.lineWidth = 2
      ctx.strokeRect(centerX - towerWidth / 2, towerTop, towerWidth, towerHeight)

      // Draw levels with lettuce plants
      const levelHeight = towerHeight / levels.length
      const plantRadius = 60 // Distance from center for plants

      levels.forEach((level, index) => {
        const levelY = towerTop + index * levelHeight + levelHeight / 2
        const progress = level.value / 1500 // Normalize to max value
        const growthStage = Math.floor(progress * 5) // 0-5 growth stages

        // Draw 4 lettuce plants around the tower at this level
        for (let i = 0; i < 4; i++) {
          const angle = (Math.PI * 2 * i) / 4 + rotation * 0.5
          const plantX = centerX + Math.cos(angle) * plantRadius
          const plantY = levelY + Math.sin(angle) * 15 // Slight vertical offset for 3D effect

          // Draw lettuce plant based on growth stage
          ctx.save()
          ctx.translate(plantX, plantY)

          // Pot/container
          ctx.fillStyle = "#374151"
          ctx.fillRect(-12, 15, 24, 12)
          ctx.strokeStyle = level.color
          ctx.lineWidth = 2
          ctx.strokeRect(-12, 15, 24, 12)

          // Lettuce leaves (more leaves = more growth)
          const leafCount = Math.max(3, growthStage + 2)
          const leafSize = 8 + growthStage * 3

          for (let j = 0; j < leafCount; j++) {
            const leafAngle = (Math.PI * 2 * j) / leafCount + rotation
            const leafX = Math.cos(leafAngle) * (leafSize * 0.6)
            const leafY = Math.sin(leafAngle) * (leafSize * 0.6) - growthStage * 2

            // Leaf shape (ellipse)
            ctx.fillStyle = j % 2 === 0 ? "#10b981" : "#059669"
            ctx.beginPath()
            ctx.ellipse(leafX, leafY, leafSize, leafSize * 1.5, leafAngle, 0, Math.PI * 2)
            ctx.fill()

            // Leaf veins
            ctx.strokeStyle = "#047857"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(leafX, leafY)
            ctx.lineTo(0, 5)
            ctx.stroke()
          }

          // Center bud
          ctx.fillStyle = "#34d399"
          ctx.beginPath()
          ctx.arc(0, 0, 4 + growthStage, 0, Math.PI * 2)
          ctx.fill()

          // Growth indicator glow
          if (growthStage > 2) {
            ctx.shadowColor = level.color
            ctx.shadowBlur = 10
            ctx.strokeStyle = level.color
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.arc(0, 0, leafSize + 5, 0, Math.PI * 2)
            ctx.stroke()
            ctx.shadowBlur = 0
          }

          ctx.restore()
        }

        // Level label on tower
        ctx.fillStyle = "#e6e8eb"
        ctx.font = "bold 12px monospace"
        ctx.textAlign = "center"
        ctx.fillText(level.label, centerX, levelY + 4)

        // Hover effect
        if (hoveredLevel === index) {
          ctx.strokeStyle = level.color
          ctx.lineWidth = 3
          ctx.setLineDash([5, 5])
          ctx.beginPath()
          ctx.arc(centerX, levelY, plantRadius + 20, 0, Math.PI * 2)
          ctx.stroke()
          ctx.setLineDash([])
        }
      })

      // Draw nutrient flow (animated droplets along tower)
      ctx.fillStyle = "#14b8a6"
      ctx.globalAlpha = 0.6
      for (let i = 0; i < 5; i++) {
        const dropletY = towerTop + ((rotation * 100 + i * 100) % towerHeight)
        ctx.beginPath()
        ctx.arc(centerX - towerWidth / 4, dropletY, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(centerX + towerWidth / 4, dropletY + 50, 2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      rotation += 0.005
      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [hoveredLevel])

  return (
    <Card className="glass-panel p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Hydroponic Growth Tower</h2>
          <p className="text-sm text-muted-foreground">Your portfolio visualized as growing lettuce plants</p>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/50">
          <Sprout className="w-3 h-3 mr-1" />
          Growing
        </Badge>
      </div>

      {/* Canvas */}
      <div className="relative">
        <canvas ref={canvasRef} className="w-full h-[500px] rounded-lg bg-gradient-to-b from-background to-card" />

        {/* Legend */}
        <div className="absolute bottom-4 left-4 glass-panel rounded-lg p-3 space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">PORTFOLIO</p>
          {levels.map((level, index) => (
            <button
              key={level.id}
              onMouseEnter={() => setHoveredLevel(index)}
              onMouseLeave={() => setHoveredLevel(null)}
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors w-full"
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: level.color }} />
              <span>{level.label}</span>
              <span className="text-xs text-muted-foreground ml-auto">+{level.growth}%</span>
            </button>
          ))}
        </div>

        {/* Info badges */}
        <div className="absolute top-4 right-4 space-y-2">
          <div className="glass-panel rounded-lg p-2 flex items-center gap-2 text-sm">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Auto-watering</span>
          </div>
          <div className="glass-panel rounded-lg p-2 flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">+10.2% avg</span>
          </div>
        </div>
      </div>

      {/* Tower stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Total Value</p>
          <p className="text-lg font-bold text-primary">$3,000</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Growth Rate</p>
          <p className="text-lg font-bold text-accent">+10.2%</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Health</p>
          <p className="text-lg font-bold text-green-500">Excellent</p>
        </div>
      </div>
    </Card>
  )
}
