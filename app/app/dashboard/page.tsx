"use client"

import { HydroponicTower } from "@/components/hydroponic-tower"
import { DashboardStats } from "@/components/dashboard-stats"
import { GrowthChart } from "@/components/growth-chart"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"

// Mock DCA strategies with token-specific colors from hydroponic tower
const mockStrategies = [
  {
    id: "a3f7e2",
    input: "USDC",
    output: "WBTC",
    progress: 67,
    amount: "$500",
    color: "#2775ca" // USDC blue
  },
  {
    id: "b8c1d5",
    input: "USDC",
    output: "WETH",
    progress: 42,
    amount: "$250",
    color: "#627eea" // WETH blue/purple
  },
  {
    id: "9e4f3a",
    input: "USDT",
    output: "UNI",
    progress: 89,
    amount: "$1000",
    color: "#14b8a6" // Primary turquoise (from growth chart)
  },
  {
    id: "7d2b6c",
    input: "GHO",
    output: "ARB",
    progress: 23,
    amount: "$100",
    color: "#b06fff" // GHO/accent violet
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Your Growth Dashboard</h1>
        <p className="text-muted-foreground">Watch your investments and impact grow in real-time</p>
      </div>

      {/* Main dashboard grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* 3D Tower - takes 2 columns */}
        <div className="lg:col-span-2">
          <HydroponicTower />
        </div>

        {/* Stats sidebar */}
        <div className="space-y-6">
          <DashboardStats />
        </div>
      </div>

      {/* Active DCA Strategies */}
      <Card className="glass-panel p-6">
        <h2 className="text-xl font-bold mb-4">Active DCA Strategies</h2>
        <div className="space-y-4">
          {mockStrategies.map((strategy) => (
            <div key={strategy.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold" style={{ color: strategy.color }}>{strategy.input}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold" style={{ color: strategy.color }}>{strategy.output}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">#{strategy.id}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{strategy.amount}</span>
                  <span className="text-sm font-semibold">{strategy.progress}%</span>
                </div>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${strategy.progress}%`,
                    backgroundColor: strategy.color,
                    boxShadow: `0 0 10px ${strategy.color}50`
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {strategy.progress}% of {strategy.input} converted to {strategy.output}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Growth chart */}
      <GrowthChart />
    </div>
  )
}
