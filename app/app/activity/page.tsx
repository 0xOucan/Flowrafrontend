import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Heart, Droplets, ArrowUpRight, ExternalLink } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "dca",
    action: "DCA Purchase",
    token: "USDC",
    amount: "$50.00",
    quantity: "50 USDC",
    timestamp: "2025-02-12 14:30",
    status: "completed",
    txHash: "0x5xK7m...9pL2",
    chain: "Ethereum",
  },
  {
    id: 2,
    type: "yield",
    action: "Yield Earned",
    token: "WETH",
    amount: "$12.50",
    quantity: "0.0042 WETH",
    timestamp: "2025-02-12 12:00",
    status: "completed",
    txHash: "0x8nP4q...3rM9",
    chain: "Arbitrum",
  },
  {
    id: 3,
    type: "donation",
    action: "Impact Donation",
    project: "Amazon Rainforest",
    amount: "$2.50",
    timestamp: "2025-02-12 12:05",
    status: "completed",
    txHash: "0x2wQ8t...7sN4",
    chain: "Ethereum",
  },
  {
    id: 4,
    type: "dca",
    action: "DCA Purchase",
    token: "DAI",
    amount: "$25.00",
    quantity: "25 DAI",
    timestamp: "2025-02-11 14:30",
    status: "completed",
    txHash: "0x9mL5k...4pR8",
    chain: "Base",
  },
  {
    id: 5,
    type: "stake",
    action: "Supply to Aave",
    token: "USDC",
    amount: "50 USDC",
    timestamp: "2025-02-11 14:35",
    status: "completed",
    txHash: "0x6tH3n...1qW7",
    chain: "Ethereum",
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "dca":
      return <TrendingUp className="w-5 h-5 text-primary" />
    case "yield":
      return <Droplets className="w-5 h-5 text-accent" />
    case "donation":
      return <Heart className="w-5 h-5 text-primary" />
    case "stake":
      return <ArrowUpRight className="w-5 h-5 text-accent" />
    default:
      return <TrendingUp className="w-5 h-5" />
  }
}

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Activity</h1>
        <p className="text-muted-foreground">Track all your transactions and impact</p>
      </div>

      {/* Summary cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="glass-panel p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Total Transactions</p>
          <p className="text-2xl font-bold">127</p>
        </Card>
        <Card className="glass-panel p-4 space-y-1">
          <p className="text-sm text-muted-foreground">This Week</p>
          <p className="text-2xl font-bold text-primary">12</p>
        </Card>
        <Card className="glass-panel p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Total Volume</p>
          <p className="text-2xl font-bold">$3,287</p>
        </Card>
        <Card className="glass-panel p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Gas Saved</p>
          <p className="text-2xl font-bold text-accent">$0.12</p>
        </Card>
      </div>

      {/* Activity tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="dca">DCA</TabsTrigger>
          <TabsTrigger value="yield">Yield</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          {activities.map((activity) => (
            <Card key={activity.id} className="glass-panel p-6 hover:glow-turquoise transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{activity.action}</h3>
                      <Badge variant="outline" className="text-xs">
                        {activity.status}
                      </Badge>
                      {activity.chain && (
                        <Badge variant="outline" className="text-xs bg-primary/5">
                          {activity.chain}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {activity.token && `${activity.token} • `}
                      {activity.project && `${activity.project} • `}
                      {activity.timestamp}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <span>Tx: {activity.txHash}</span>
                      <a
                        href={`https://etherscan.io/tx/${activity.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right space-y-1">
                  <p className="text-lg font-bold">{activity.amount}</p>
                  {activity.quantity && <p className="text-sm text-muted-foreground">{activity.quantity}</p>}
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="dca">
          <Card className="glass-panel p-12 text-center">
            <p className="text-muted-foreground">Filter by DCA transactions</p>
          </Card>
        </TabsContent>

        <TabsContent value="yield">
          <Card className="glass-panel p-12 text-center">
            <p className="text-muted-foreground">Filter by yield transactions</p>
          </Card>
        </TabsContent>

        <TabsContent value="donations">
          <Card className="glass-panel p-12 text-center">
            <p className="text-muted-foreground">Filter by donation transactions</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
