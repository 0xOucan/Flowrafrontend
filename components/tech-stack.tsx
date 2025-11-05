import { Card } from "@/components/ui/card"

export function TechStack() {
  const technologies = [
    {
      name: "Ethereum",
      description: "Secure, decentralized blockchain",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
    },
    {
      name: "Aave v3",
      description: "Leading DeFi lending protocol",
      logo: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=035",
    },
    {
      name: "Uniswap v4",
      description: "Decentralized exchange",
      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=035",
    },
    {
      name: "Arbitrum",
      description: "Layer 2 scaling solution",
      logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=035",
    },
  ]

  return (
    <section className="relative px-4 py-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Built on <span className="text-primary">EVM Chains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Powered by the best protocols in DeFi
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="glass-panel p-6 space-y-4 hover:glow-violet transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10 object-contain" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-panel rounded-lg p-6 font-mono text-sm">
            <span className="text-muted-foreground">Networks:</span>{" "}
            <span className="text-primary">Ethereum • Arbitrum • Base</span>
            <span className="mx-4 text-muted-foreground">•</span>
            <span className="text-muted-foreground">Protocols:</span>{" "}
            <span className="text-accent">Aave v3 • Uniswap v4</span>
          </div>
        </div>
      </div>
    </section>
  )
}
