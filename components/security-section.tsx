import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Code } from "lucide-react"

export function SecuritySection() {
  const features = [
    {
      icon: Shield,
      title: "Non-Custodial",
      description: "Your keys, your crypto. We never hold your funds.",
    },
    {
      icon: Lock,
      title: "Audited Smart Contracts",
      description: "Code reviewed by leading security firms.",
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "All transactions on-chain and verifiable.",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Community-driven development on GitHub.",
    },
  ]

  return (
    <section className="relative px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Security <span className="text-primary">First</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Built with best practices and audited by experts
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-panel p-6 space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Security badge */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-panel rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Audited by OtterSec</span>
            </div>
            <p className="text-sm text-muted-foreground">Last audit: December 2024 • No critical issues found</p>
          </div>
        </div>
      </div>
    </section>
  )
}
