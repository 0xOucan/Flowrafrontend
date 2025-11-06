"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, TrendingUp, Sprout, Zap } from "lucide-react"
import Link from "next/link"

// Mock DCA strategies with 6-digit hashes from txid
const mockStrategies = [
  { id: "a3f7e2", input: "USDC", output: "WBTC", progress: 67, amount: "$500" },
  { id: "b8c1d5", input: "USDC", output: "WETH", progress: 42, amount: "$250" },
  { id: "9e4f3a", input: "USDT", output: "UNI", progress: 89, amount: "$1000" },
  { id: "7d2b6c", input: "GHO", output: "ARB", progress: 23, amount: "$100" },
]

export default function AppDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to Flowra</h1>
        <p className="text-muted-foreground">Start your automated DCA journey and grow your impact</p>
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="glass-panel p-6 space-y-4 hover:glow-turquoise transition-all group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Start DCA</h3>
            <p className="text-sm text-muted-foreground">Set up your first automated investment strategy</p>
          </div>
          <Button className="w-full group-hover:glow-turquoise" asChild>
            <Link href="/app/dca/new">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="glass-panel p-6 space-y-4 hover:glow-violet transition-all group">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <Sprout className="w-6 h-6 text-accent" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Choose Projects</h3>
            <p className="text-sm text-muted-foreground">Select regenerative projects to support</p>
          </div>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/app/projects">
              Browse Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="glass-panel p-6 space-y-4 hover:border-primary/50 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">View Dashboard</h3>
            <p className="text-sm text-muted-foreground">Track your growth and impact in 3D</p>
          </div>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/app/dashboard">
              Open Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </div>

      {/* Stats overview */}
      <Card className="glass-panel p-6">
        <h2 className="text-xl font-semibold mb-4">Your Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Invested</p>
            <p className="text-2xl font-bold text-primary">$0.00</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Current Value</p>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Yield Earned</p>
            <p className="text-2xl font-bold text-accent">$0.00</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Impact Donated</p>
            <p className="text-2xl font-bold text-primary">$0.00</p>
          </div>
        </div>
      </Card>

      {/* Active DCA Strategies */}
      <Card className="glass-panel p-6">
        <h2 className="text-xl font-semibold mb-4">Active DCA Strategies</h2>
        <div className="space-y-4">
          {mockStrategies.map((strategy) => (
            <div key={strategy.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">{strategy.input}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-accent">{strategy.output}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">#{strategy.id}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{strategy.amount}</span>
                  <span className="text-sm font-semibold">{strategy.progress}%</span>
                </div>
              </div>
              <Progress value={strategy.progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {strategy.progress}% of {strategy.input} converted to {strategy.output}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Getting started guide */}
      <Card className="glass-panel p-6">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">1</span>
            </div>
            <div>
              <p className="font-medium">Connect your wallet</p>
              <p className="text-sm text-muted-foreground">
                Use the button in the top right to connect your EVM wallet (MetaMask, Rainbow, etc.)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">2</span>
            </div>
            <div>
              <p className="font-medium">Set up your DCA strategy</p>
              <p className="text-sm text-muted-foreground">Choose network, tokens, investment amount, and frequency</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">3</span>
            </div>
            <div>
              <p className="font-medium">Select impact projects</p>
              <p className="text-sm text-muted-foreground">
                Choose which regenerative projects receive a portion of your yield
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
