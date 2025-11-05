import { HydroponicTower } from "@/components/hydroponic-tower"
import { DashboardStats } from "@/components/dashboard-stats"
import { GrowthChart } from "@/components/growth-chart"

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

      {/* Growth chart */}
      <GrowthChart />
    </div>
  )
}
