import { Card } from "@/components/ui/card"
import { TrendingUp, Droplets, Heart, Zap } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      label: "Total Invested",
      value: "$2,850",
      change: "+$150 this week",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Yield Earned",
      value: "$287",
      change: "+10.2% APY",
      icon: Droplets,
      color: "text-accent",
    },
    {
      label: "Impact Donated",
      value: "$43",
      change: "15% of yield",
      icon: Heart,
      color: "text-primary",
    },
    {
      label: "Active Strategies",
      value: "3",
      change: "All running",
      icon: Zap,
      color: "text-accent",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} className="glass-panel p-6 space-y-3 hover:glow-turquoise transition-all">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}
