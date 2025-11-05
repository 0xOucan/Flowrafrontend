"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sprout } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-panel glow-turquoise mb-4">
          <Sprout className="w-10 h-10 text-primary" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
          Plant your crypto,
          <br />
          <span className="text-primary glow-turquoise">grow impact</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Automated DCA + yield farming that gives back. Grow yield, feed the future.
        </p>

        {/* Terminal-style feature list */}
        <div className="glass-panel rounded-lg p-6 max-w-2xl mx-auto text-left font-mono text-sm space-y-2 scanlines">
          <div className="text-primary">
            <span className="text-muted-foreground">$</span> flowra init
          </div>
          <div className="text-muted-foreground pl-4">✓ Auto-DCA into your favorite tokens</div>
          <div className="text-muted-foreground pl-4">✓ Earn yield on Ethereum, Arbitrum & Base</div>
          <div className="text-muted-foreground pl-4">✓ Donate % to regenerative projects</div>
          <div className="text-accent pl-4 terminal-cursor">Ready to grow</div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-turquoise group"
            asChild
          >
            <Link href="/app">
              Launch App
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent" asChild>
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">$2.4M+</div>
            <div className="text-sm text-muted-foreground">Total Value Locked</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">12K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">$180K+</div>
            <div className="text-sm text-muted-foreground">Donated to Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}
