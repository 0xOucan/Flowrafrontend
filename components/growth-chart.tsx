"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const data = [
  { date: "Jan 1", portfolio: 2000, yield: 0, donated: 0 },
  { date: "Jan 8", portfolio: 2150, yield: 45, donated: 7 },
  { date: "Jan 15", portfolio: 2300, yield: 92, donated: 14 },
  { date: "Jan 22", portfolio: 2500, yield: 145, donated: 22 },
  { date: "Jan 29", portfolio: 2700, yield: 205, donated: 31 },
  { date: "Feb 5", portfolio: 2850, yield: 267, donated: 40 },
  { date: "Feb 12", portfolio: 3000, yield: 287, donated: 43 },
]

export function GrowthChart() {
  return (
    <Card className="glass-panel p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Growth Over Time</h2>
          <p className="text-sm text-muted-foreground">Track your portfolio value, yield, and impact</p>
        </div>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b06fff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#b06fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} tickFormatter={(value) => `$${value}`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "8px",
                color: "#e6e8eb",
              }}
              formatter={(value: number) => [`$${value}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="portfolio"
              stroke="#14b8a6"
              strokeWidth={2}
              fill="url(#colorPortfolio)"
              name="Portfolio Value"
            />
            <Area
              type="monotone"
              dataKey="yield"
              stroke="#b06fff"
              strokeWidth={2}
              fill="url(#colorYield)"
              name="Yield Earned"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-muted-foreground">Portfolio Value</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-muted-foreground">Yield Earned</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-muted-foreground">Donated</span>
        </div>
      </div>
    </Card>
  )
}
