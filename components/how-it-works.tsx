import { Card } from "@/components/ui/card"
import { Wallet, TrendingUp, Sprout, Heart } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your EVM wallet securely. No custody, you stay in control.",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Set DCA Strategy",
      description: "Choose tokens, frequency, and amount. Automate your accumulation.",
      color: "text-accent",
    },
    {
      icon: Sprout,
      title: "Earn Yield",
      description: "Your tokens auto-stake on Aave v3 for passive income.",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Give Back",
      description: "Allocate a % of yield to regenerative projects. Track your impact.",
      color: "text-accent",
    },
  ]

  return (
    <section id="how-it-works" className="relative px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            How <span className="text-primary">Flowra</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Four simple steps to automate your crypto growth while making a positive impact
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="glass-panel p-6 space-y-4 hover:glow-turquoise transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 font-mono">0{index + 1}</span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-48 mb-48 pointer-events-none">
          <svg className="w-full h-24 opacity-20" viewBox="0 0 1200 100">
            <path
              d="M 150 50 L 450 50 M 450 50 L 750 50 M 750 50 L 1050 50"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              className="text-primary"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
