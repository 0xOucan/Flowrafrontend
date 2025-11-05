import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DCAPage() {
  // Mock data - would come from blockchain/database
  const strategies = []

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">DCA Strategies</h1>
          <p className="text-muted-foreground">Automate your crypto investments with dollar-cost averaging</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 glow-turquoise" asChild>
          <Link href="/app/dca/new">
            <Plus className="w-4 h-4 mr-2" />
            New Strategy
          </Link>
        </Button>
      </div>

      {/* Empty state */}
      {strategies.length === 0 && (
        <Card className="glass-panel p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">No strategies yet</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Create your first DCA strategy to start automating your crypto investments
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 glow-turquoise" asChild>
            <Link href="/app/dca/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Strategy
            </Link>
          </Button>
        </Card>
      )}

      {/* Info cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="glass-panel p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Automated</h3>
            <p className="text-sm text-muted-foreground">Set it and forget it. Your strategy runs automatically.</p>
          </div>
        </Card>

        <Card className="glass-panel p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Multi-Chain</h3>
            <p className="text-sm text-muted-foreground">Deploy on Ethereum, Arbitrum, or Base for optimal fees.</p>
          </div>
        </Card>

        <Card className="glass-panel p-6 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Auto-Supply</h3>
            <p className="text-sm text-muted-foreground">Purchased tokens automatically supply to Aave v3 for yield.</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
