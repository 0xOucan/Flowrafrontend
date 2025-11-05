import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { TechStack } from "@/components/tech-stack"
import { SecuritySection } from "@/components/security-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-primary rounded-full particle-drift opacity-40" />
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full particle-drift opacity-30"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-1 h-1 bg-primary rounded-full particle-drift opacity-50"
          style={{ animationDelay: "10s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full particle-drift opacity-40"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* CRT vignette */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/40" />

      <HeroSection />
      <HowItWorks />
      <TechStack />
      <SecuritySection />
      <Footer />
    </main>
  )
}
