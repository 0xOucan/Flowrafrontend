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
  { id: 4, name: "Investment Plan", description: "Total & frequency" },
  { id: 5, name: "Impact & Projects", description: "Donations" },
  { id: 6, name: "Configure Yield", description: "Aave staking" },
  { id: 7, name: "Review", description: "Confirm details" },
]

const chains = [
  { id: "ethereum", name: "Ethereum", icon: "⟠" },
  { id: "arbitrum", name: "Arbitrum", icon: "🔷" },
  { id: "base", name: "Base", icon: "🔵" },
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
  { symbol: "USDC", name: "USD Coin", apy: "4.2%", chains: ["ethereum", "arbitrum", "base"], price: 1 },
  { symbol: "USDT", name: "Tether USD", apy: "4.5%", chains: ["ethereum", "arbitrum"], price: 1 },
  { symbol: "DAI", name: "Dai Stablecoin", apy: "5.1%", chains: ["ethereum", "arbitrum", "base"], price: 1 },
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
]

export function DCASetupWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    chain: "",
    inputToken: "", // What you're spending
    outputToken: "", // What you're buying
    totalInvestment: "", // Total amount to invest
    amountPerPeriod: "", // Amount per purchase
    frequency: "",
    donationPercent: 5,
    selectedProjects: [] as number[], // Array of project IDs
    autoStake: true,
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
  const selectedFrequency = frequencies.find((f) => f.value === formData.frequency)
  const availableStablecoins = formData.chain
    ? stablecoins.filter((t) => t.chains.includes(formData.chain))
    : stablecoins
  const availableOutputTokens = formData.chain
    ? outputTokens.filter((t) => t.chains.includes(formData.chain))
    : outputTokens

  const calculatedDuration =
    formData.totalInvestment && formData.amountPerPeriod
      ? Math.ceil(Number.parseFloat(formData.totalInvestment) / Number.parseFloat(formData.amountPerPeriod))
      : 0

  const estimatedOutputPerPurchase =
    formData.amountPerPeriod && selectedOutputToken
      ? (Number.parseFloat(formData.amountPerPeriod) / selectedOutputToken.price).toFixed(6)
      : "0"

  const totalEstimatedOutput =
    calculatedDuration && estimatedOutputPerPurchase
      ? (Number.parseFloat(estimatedOutputPerPurchase) * calculatedDuration).toFixed(6)
      : "0"

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
                    updateFormData("chain", chain.id)
                    updateFormData("inputToken", "")
                    updateFormData("outputToken", "")
                  }}
                  className={cn(
                    "p-6 rounded-lg border-2 text-center transition-all hover:border-primary/50",
                    formData.chain === chain.id
                      ? "border-primary bg-primary/5 glow-turquoise"
                      : "border-border bg-card",
                  )}
                >
                  <div className="text-4xl mb-3">{chain.icon}</div>
                  <p className="font-semibold">{chain.name}</p>
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
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{token.symbol.slice(0, 2)}</span>
                    </div>
                    {formData.inputToken === token.symbol && <Check className="w-5 h-5 text-primary" />}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{token.symbol}</h3>
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
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">{token.symbol.slice(0, 2)}</span>
                    </div>
                    {formData.outputToken === token.symbol && <Check className="w-5 h-5 text-accent" />}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{token.symbol}</h3>
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

        {/* Step 4: Investment Plan - Total, Amount per Period, Frequency */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Configure Investment Plan</h2>
              <p className="text-muted-foreground">Set your total investment and purchase frequency</p>
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
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="totalInvestment"
                      type="number"
                      placeholder="100"
                      value={formData.totalInvestment}
                      onChange={(e) => updateFormData("totalInvestment", e.target.value)}
                      className="pl-7 text-lg h-12"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Total amount you want to invest over time</p>
                </div>

                {/* Quick total amount buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {[100, 500, 1000, 5000].map((amount) => (
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

              {/* Frequency selection */}
              <div className="space-y-3">
                <Label>Purchase Frequency</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.value}
                      onClick={() => updateFormData("frequency", freq.value)}
                      className={cn(
                        "p-4 rounded-lg border-2 text-left transition-all hover:border-primary/50",
                        formData.frequency === freq.value
                          ? "border-primary bg-primary/5 glow-turquoise"
                          : "border-border bg-card",
                      )}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold">{freq.label}</h3>
                        {formData.frequency === freq.value && <Check className="w-5 h-5 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{freq.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount per Period */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amountPerPeriod">
                    Amount per {formData.frequency ? selectedFrequency?.label.toLowerCase() : "period"} (
                    {formData.inputToken})
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input
                      id="amountPerPeriod"
                      type="number"
                      placeholder="10"
                      value={formData.amountPerPeriod}
                      onChange={(e) => updateFormData("amountPerPeriod", e.target.value)}
                      className="pl-7 text-lg h-12"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    How much to invest each {formData.frequency ? selectedFrequency?.label.toLowerCase() : "period"}
                  </p>
                </div>

                {/* Quick amount per period buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {[10, 25, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      onClick={() => updateFormData("amountPerPeriod", amount.toString())}
                      className={cn(formData.amountPerPeriod === amount.toString() && "border-primary bg-primary/5")}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Duration calculation and summary */}
              {formData.totalInvestment && formData.amountPerPeriod && formData.frequency && calculatedDuration > 0 && (
                <Card className="bg-accent/5 border-accent/20 p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Investment Summary</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="text-2xl font-bold text-accent">
                        {calculatedDuration} {selectedFrequency?.label.toLowerCase()}s
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Per purchase</p>
                      <p className="text-2xl font-bold">
                        ${formData.amountPerPeriod} {formData.inputToken}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total output</p>
                      <p className="text-2xl font-bold text-accent">
                        ~{totalEstimatedOutput} {formData.outputToken}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      You'll spend <span className="font-semibold">${formData.totalInvestment}</span> over{" "}
                      <span className="font-semibold">{calculatedDuration}</span>{" "}
                      {selectedFrequency?.label.toLowerCase()}s, buying approximately{" "}
                      <span className="font-semibold text-accent">
                        {totalEstimatedOutput} {formData.outputToken}
                      </span>{" "}
                      at current prices.
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
                max={20}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
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

        {/* Step 6: Configure Yield */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Configure Yield Strategy</h2>
              <p className="text-muted-foreground">Set up automatic staking to earn yield on your investments</p>
            </div>

            <div className="space-y-6">
              {/* Auto-stake toggle */}
              <Card className="bg-muted/50 p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">Auto-Supply to Aave v3</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically supply purchased {formData.outputToken} to Aave for yield
                    </p>
                  </div>
                  <Button
                    variant={formData.autoStake ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateFormData("autoStake", !formData.autoStake)}
                  >
                    {formData.autoStake ? "Enabled" : "Disabled"}
                  </Button>
                </div>
                {formData.autoStake && selectedOutputToken && (
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Expected APY:</span>{" "}
                      <span className="font-semibold text-primary">{selectedOutputToken.apy}</span>
                    </p>
                  </div>
                )}
              </Card>

              {/* Impact preview */}
              {formData.totalInvestment &&
                formData.autoStake &&
                selectedOutputToken &&
                formData.donationPercent > 0 && (
                  <Card className="bg-accent/5 border-accent/20 p-6 space-y-3">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Heart className="w-5 h-5 text-accent" />
                      Estimated Impact
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual yield generated</p>
                        <p className="text-2xl font-bold">
                          $
                          {(
                            Number.parseFloat(formData.totalInvestment) *
                            (Number.parseFloat(selectedOutputToken.apy) / 100)
                          ).toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Donated to {formData.selectedProjects.length || "selected"} project
                          {formData.selectedProjects.length !== 1 ? "s" : ""}
                        </p>
                        <p className="text-3xl font-bold text-accent">
                          $
                          {(
                            Number.parseFloat(formData.totalInvestment) *
                            (Number.parseFloat(selectedOutputToken.apy) / 100) *
                            (formData.donationPercent / 100)
                          ).toFixed(2)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">per year</p>
                      </div>
                    </div>
                  </Card>
                )}
            </div>
          </div>
        )}

        {/* Step 7: Review */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Review Your Strategy</h2>
              <p className="text-muted-foreground">Confirm your DCA strategy details before creating</p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-6">
                <h3 className="font-semibold text-lg mb-4">DCA Strategy</h3>
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Spending</p>
                    <p className="text-3xl font-bold text-primary mb-1">${formData.amountPerPeriod}</p>
                    <p className="text-lg font-semibold text-primary">{formData.inputToken}</p>
                    <p className="text-xs text-muted-foreground mt-1">per {selectedFrequency?.label.toLowerCase()}</p>
                  </div>
                  <div className="px-6">
                    <ArrowRight className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Buying</p>
                    <p className="text-3xl font-bold text-accent mb-1">~{estimatedOutputPerPurchase}</p>
                    <p className="text-lg font-semibold text-accent">{formData.outputToken}</p>
                    <p className="text-xs text-muted-foreground mt-1">per {selectedFrequency?.label.toLowerCase()}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border grid sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="text-xl font-bold">
                      {calculatedDuration} {selectedFrequency?.label.toLowerCase()}s
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
                    <p className="text-xl font-bold">${formData.totalInvestment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Network</p>
                    <p className="text-xl font-bold capitalize">{formData.chain}</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-muted/50 p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auto-supply to Aave</span>
                  <span className="font-semibold">{formData.autoStake ? "Yes" : "No"}</span>
                </div>
                {formData.autoStake && selectedOutputToken && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected APY</span>
                    <span className="font-semibold text-primary">{selectedOutputToken.apy}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Donation %</span>
                  <span className="font-semibold text-accent">{formData.donationPercent}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects supported</span>
                  <span className="font-semibold">{formData.selectedProjects.length}</span>
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

              <Card className="bg-primary/5 border-primary/20 p-6 space-y-4">
                <h3 className="font-semibold text-lg">Summary</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    You will spend{" "}
                    <span className="font-semibold">
                      ${formData.amountPerPeriod} {formData.inputToken}
                    </span>{" "}
                    every <span className="font-semibold">{formData.frequency}</span> to buy{" "}
                    <span className="font-semibold text-accent">{formData.outputToken}</span> on{" "}
                    <span className="font-semibold capitalize">{formData.chain}</span>.
                  </p>
                  <p>
                    Total investment: <span className="font-semibold">${formData.totalInvestment}</span> over{" "}
                    <span className="font-semibold">{calculatedDuration}</span> {selectedFrequency?.label.toLowerCase()}
                    s.
                  </p>
                  {formData.autoStake && selectedOutputToken && (
                    <p>
                      Your {formData.outputToken} will automatically supply to Aave v3 for an estimated{" "}
                      <span className="font-semibold text-primary">{selectedOutputToken.apy} APY</span>.
                    </p>
                  )}
                  <p>
                    <span className="font-semibold text-accent">{formData.donationPercent}%</span> of your yield will
                    support {formData.selectedProjects.length} regenerative{" "}
                    {formData.selectedProjects.length === 1 ? "project" : "projects"}.
                  </p>
                </div>
              </Card>
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
                (currentStep === 4 &&
                  (!formData.totalInvestment || !formData.amountPerPeriod || !formData.frequency)) ||
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
