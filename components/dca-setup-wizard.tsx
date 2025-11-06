"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, ArrowLeft, Check, ArrowDownUp, Heart, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const steps = [
  { id: 1, name: "Select Chain", description: "Choose network" },
  { id: 2, name: "Input Token", description: "What you're spending" },
  { id: 3, name: "Output Token", description: "What you're buying" },
  { id: 4, name: "Investment Plan", description: "Total amount" },
  { id: 5, name: "Impact & Projects", description: "Donations" },
  { id: 6, name: "Review", description: "Confirm details" },
]

const chains = [
  { id: "ethereum", name: "Ethereum", icon: "⟠", disabled: true },
  { id: "arbitrum", name: "Arbitrum", icon: "🔷", disabled: false },
  { id: "base", name: "Base", icon: "🔵", disabled: true },
]

const stablecoins = [
  { symbol: "USDC", name: "USD Coin", apy: "4.2%", chains: ["ethereum", "arbitrum", "base"] },
  { symbol: "USDT", name: "Tether USD", apy: "4.5%", chains: ["ethereum", "arbitrum"] },
  { symbol: "DAI", name: "Dai Stablecoin", apy: "5.1%", chains: ["ethereum", "arbitrum", "base"] },
  { symbol: "GHO", name: "Aave GHO", apy: "6.2%", chains: ["ethereum", "arbitrum"] },
]

const outputTokens = [
  { symbol: "WETH", name: "Wrapped Ether", apy: "3.1%", chains: ["ethereum", "arbitrum", "base"], price: 3200 },
  { symbol: "WBTC", name: "Wrapped Bitcoin", apy: "0.8%", chains: ["ethereum", "arbitrum"], price: 65000 },
  { symbol: "UNI", name: "Uniswap", apy: "2.4%", chains: ["ethereum", "arbitrum", "base"], price: 12 },
  { symbol: "ARB", name: "Arbitrum", apy: "5.2%", chains: ["arbitrum"], price: 0.85 },
]

const frequencies = [
  { value: "daily", label: "Daily", description: "Every 24 hours", multiplier: 365 },
  { value: "weekly", label: "Weekly", description: "Every 7 days", multiplier: 52 },
  { value: "biweekly", label: "Bi-weekly", description: "Every 14 days", multiplier: 26 },
  { value: "monthly", label: "Monthly", description: "Every 30 days", multiplier: 12 },
]

const projects = [
  {
    id: 1,
    name: "Amazon Rainforest Restoration",
    category: "Reforestation",
    location: "Brazil",
    image: "/amazon-rainforest.png",
    raised: 45000,
    goal: 100000,
  },
  {
    id: 2,
    name: "Ocean Plastic Removal",
    category: "Ocean Cleanup",
    location: "Pacific Ocean",
    image: "/ocean-cleanup-effort.png",
    raised: 78000,
    goal: 150000,
  },
  {
    id: 3,
    name: "Solar Power for Villages",
    category: "Renewable Energy",
    location: "Kenya",
    image: "/solar-panels-village.jpg",
    raised: 32000,
    goal: 80000,
  },
  {
    id: 4,
    name: "Regenerative Farming Initiative",
    category: "Sustainable Agriculture",
    location: "India",
    image: "/regenerative-farming.jpg",
    raised: 56000,
    goal: 120000,
  },
  {
    id: 5,
    name: "Coral Reef Restoration",
    category: "Ocean Cleanup",
    location: "Great Barrier Reef",
    image: "/vibrant-coral-reef.png",
    raised: 41000,
    goal: 90000,
  },
  {
    id: 6,
    name: "Wildlife Corridor Protection",
    category: "Wildlife Conservation",
    location: "Tanzania",
    image: "/wildlife-corridor-africa.jpg",
    raised: 67000,
    goal: 140000,
  },
  {
    id: 7,
    name: "Flowra",
    category: "Public Good",
    location: "Web3",
    image: "/placeholder-logo.png",
    raised: 12000,
    goal: 50000,
  },
]

export function DCASetupWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    chain: "",
    inputToken: "", // What you're spending
    outputToken: "", // What you're buying
    totalInvestment: "", // Total amount to invest
    donationPercent: 1,
    selectedProjects: [7] as number[], // Array of project IDs - Flowra default
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const selectedInputToken = stablecoins.find((t) => t.symbol === formData.inputToken)
  const selectedOutputToken = outputTokens.find((t) => t.symbol === formData.outputToken)
  const availableStablecoins = formData.chain
    ? stablecoins.filter((t) => t.chains.includes(formData.chain))
    : stablecoins
  const availableOutputTokens = formData.chain
    ? outputTokens.filter((t) => t.chains.includes(formData.chain))
    : outputTokens

  const totalEstimatedOutput =
    formData.totalInvestment && selectedOutputToken
      ? (Number.parseFloat(formData.totalInvestment) / selectedOutputToken.price).toFixed(6)
      : "0"

  // Calculate estimated impact
  const annualYield =
    formData.totalInvestment && selectedOutputToken
      ? Number.parseFloat(formData.totalInvestment) * (Number.parseFloat(selectedOutputToken.apy) / 100)
      : 0
  const annualImpact = annualYield * (formData.donationPercent / 100)
  const monthlyImpact = annualImpact / 12
  const dailyImpact = annualImpact / 365

  const toggleProject = (projectId: number) => {
    setFormData((prev) => ({
      ...prev,
      selectedProjects: prev.selectedProjects.includes(projectId)
        ? prev.selectedProjects.filter((id) => id !== projectId)
        : [...prev.selectedProjects, projectId],
    }))
  }

  return (
    <div className="space-y-8">
      {/* Progress steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all",
                  currentStep > step.id
                    ? "bg-primary text-primary-foreground"
                    : currentStep === step.id
                      ? "bg-primary text-primary-foreground glow-turquoise"
                      : "bg-muted text-muted-foreground",
                )}
              >
                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <div className="mt-2 text-center hidden md:block">
                <p className="text-sm font-medium">{step.name}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn("h-0.5 flex-1 mx-2 transition-colors", currentStep > step.id ? "bg-primary" : "bg-muted")}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <Card className="glass-panel p-8">
        {/* Step 1: Select Chain */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Select Network</h2>
              <p className="text-muted-foreground">Choose which blockchain network to use for your DCA strategy</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => {
                    if (!chain.disabled) {
                      updateFormData("chain", chain.id)
                      updateFormData("inputToken", "")
                      updateFormData("outputToken", "")
                    }
                  }}
                  disabled={chain.disabled}
                  className={cn(
                    "p-6 rounded-lg border-2 text-center transition-all",
                    chain.disabled
                      ? "opacity-40 cursor-not-allowed border-border bg-muted"
                      : "hover:border-primary/50",
                    formData.chain === chain.id
                      ? "border-primary bg-primary/5 glow-turquoise"
                      : "border-border bg-card",
                  )}
                >
                  <div className="text-4xl mb-3">{chain.icon}</div>
                  <p className="font-semibold">{chain.name}</p>
                  {chain.disabled && <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Input Token (What you're spending) */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Select Input Token</h2>
              <p className="text-muted-foreground">Choose which stablecoin you'll use to buy your target asset</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {availableStablecoins.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => updateFormData("inputToken", token.symbol)}
                  className={cn(
                    "p-6 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                    formData.inputToken === token.symbol
                      ? "border-primary bg-primary/5 glow-turquoise"
                      : "border-border bg-card",
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{token.symbol}</h3>
                    {formData.inputToken === token.symbol && <Check className="w-5 h-5 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{token.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Aave APY:</span>
                    <span className="text-sm font-semibold text-primary">{token.apy}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Output Token (What you're buying) */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Select Output Token</h2>
              <p className="text-muted-foreground">Choose which asset you want to accumulate over time</p>
            </div>

            <Card className="bg-muted/50 p-4 flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Spending</p>
                <p className="text-lg font-bold text-primary">{formData.inputToken || "..."}</p>
              </div>
              <ArrowDownUp className="w-6 h-6 text-muted-foreground" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Buying</p>
                <p className="text-lg font-bold text-accent">{formData.outputToken || "..."}</p>
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {availableOutputTokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => updateFormData("outputToken", token.symbol)}
                  className={cn(
                    "p-6 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                    formData.outputToken === token.symbol
                      ? "border-accent bg-accent/5 glow-violet"
                      : "border-border bg-card",
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg">{token.symbol}</h3>
                    {formData.outputToken === token.symbol && <Check className="w-5 h-5 text-accent" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{token.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Price:</span>
                    <span className="text-sm font-semibold">${token.price.toLocaleString()}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Investment Plan - Total Amount Only */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Configure Investment Amount</h2>
              <p className="text-muted-foreground">
                Set your total DCA investment. The system will automatically execute micro-trades at optimal average
                prices via Uniswap Hooks.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Spend</p>
                  <p className="text-2xl font-bold text-primary">{formData.inputToken}</p>
                </div>
                <div className="px-4">
                  <ArrowRight className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-center flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Buy</p>
                  <p className="text-2xl font-bold text-accent">{formData.outputToken}</p>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              {/* Total Investment */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="totalInvestment">Total DCA Investment ({formData.inputToken})</Label>
                  <Input
                    id="totalInvestment"
                    type="number"
                    placeholder="100"
                    value={formData.totalInvestment}
                    onChange={(e) => updateFormData("totalInvestment", e.target.value)}
                    className="text-lg h-12"
                  />
                  <p className="text-xs text-muted-foreground">
                    Total amount to be converted to {formData.outputToken} via automated micro-trades
                  </p>
                </div>

                {/* Quick total amount buttons */}
                <div className="grid grid-cols-5 gap-2">
                  {[10, 100, 250, 500, 1000].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      onClick={() => updateFormData("totalInvestment", amount.toString())}
                      className={cn(formData.totalInvestment === amount.toString() && "border-primary bg-primary/5")}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Estimated Output */}
              {formData.totalInvestment && selectedOutputToken && (
                <Card className="bg-accent/5 border-accent/20 p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Estimated Output</h3>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">You'll receive approximately</p>
                    <p className="text-4xl font-bold text-accent mb-1">~{totalEstimatedOutput}</p>
                    <p className="text-xl font-semibold text-accent">{formData.outputToken}</p>
                    <p className="text-xs text-muted-foreground mt-3">
                      Based on current price of ${selectedOutputToken.price.toLocaleString()}
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Step 5: Impact & Projects - Donation percentage and project selection */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Configure Impact & Select Projects</h2>
              <p className="text-muted-foreground">Choose how much yield to donate and which projects to support</p>
            </div>

            {/* Donation slider */}
            <Card className="bg-muted/50 p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Donation Percentage</Label>
                  <span className="text-3xl font-bold text-primary">{formData.donationPercent}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Percentage of yield donated to regenerative projects</p>
              </div>
              <Slider
                value={[formData.donationPercent]}
                onValueChange={(value) => updateFormData("donationPercent", value[0])}
                min={1}
                max={20}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1%</span>
                <span>10%</span>
                <span>20%</span>
              </div>
            </Card>

            {/* Project selection */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Projects to Support</Label>
                <p className="text-sm text-muted-foreground">
                  Choose one or more regenerative projects. Your donations will be split equally among selected
                  projects.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project) => {
                  const progress = (project.raised / project.goal) * 100
                  const isSelected = formData.selectedProjects.includes(project.id)

                  return (
                    <button
                      key={project.id}
                      onClick={() => toggleProject(project.id)}
                      className={cn(
                        "p-4 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                        isSelected ? "border-primary bg-primary/5 glow-turquoise" : "border-border bg-card",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={project.image || "/placeholder.svg"} alt={project.name} className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-sm line-clamp-1">{project.name}</h3>
                            {isSelected && <Check className="w-5 h-5 text-primary flex-shrink-0" />}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {formData.selectedProjects.length > 0 && (
                <Card className="bg-accent/5 border-accent/20 p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-accent">{formData.selectedProjects.length}</span>{" "}
                    {formData.selectedProjects.length === 1 ? "project" : "projects"} selected. Your donations will be
                    split equally among them.
                  </p>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Review Your Strategy</h2>
              <p className="text-muted-foreground">Confirm your DCA strategy details before creating</p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-6">
                <h3 className="font-semibold text-lg mb-4">DCA Strategy</h3>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Input Token</p>
                    <p className="text-3xl font-bold text-primary">{formData.inputToken}</p>
                  </div>
                  <div className="px-6">
                    <ArrowRight className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Output Token</p>
                    <p className="text-3xl font-bold text-accent">{formData.outputToken}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Investment Amount</p>
                    <p className="text-xl font-bold">${formData.totalInvestment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Expected APY</p>
                    <p className="text-xl font-bold text-primary">{selectedOutputToken?.apy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Network</p>
                    <p className="text-xl font-bold capitalize">{formData.chain}</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-accent/5 border-accent/20 p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Estimated Impact
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Annual Donation</p>
                    <p className="text-2xl font-bold text-accent">${annualImpact.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground mt-1">per year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Monthly Donation</p>
                    <p className="text-2xl font-bold text-accent">${monthlyImpact.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground mt-1">per month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Daily Donation</p>
                    <p className="text-2xl font-bold text-accent">${dailyImpact.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground mt-1">per day</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-accent/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-accent">{formData.donationPercent}%</span> of your{" "}
                    <span className="font-semibold">${annualYield.toFixed(2)}</span> annual yield supporting{" "}
                    <span className="font-semibold">{formData.selectedProjects.length}</span> project
                    {formData.selectedProjects.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </Card>

              {formData.selectedProjects.length > 0 && (
                <Card className="bg-accent/5 border-accent/20 p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    Supporting Projects
                  </h3>
                  <div className="space-y-2">
                    {formData.selectedProjects.map((projectId) => {
                      const project = projects.find((p) => p.id === projectId)
                      return (
                        <div key={projectId} className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                            <img src={project?.image || "/placeholder.svg"} alt="" className="object-cover" />
                          </div>
                          <span className="font-medium">{project?.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              )}

            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {currentStep < steps.length ? (
            <Button
              onClick={nextStep}
              className="bg-primary hover:bg-primary/90 glow-turquoise"
              disabled={
                (currentStep === 1 && !formData.chain) ||
                (currentStep === 2 && !formData.inputToken) ||
                (currentStep === 3 && !formData.outputToken) ||
                (currentStep === 4 && !formData.totalInvestment) ||
                (currentStep === 5 && formData.selectedProjects.length === 0)
              }
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-primary hover:bg-primary/90 glow-turquoise">
              <Check className="w-4 h-4 mr-2" />
              Create Strategy
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
