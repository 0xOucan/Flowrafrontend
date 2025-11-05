import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, TrendingUp, Heart, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectDetailPage() {
  // Mock data - would come from database/API
  const project = {
    id: 1,
    name: "Amazon Rainforest Restoration",
    category: "Reforestation",
    location: "Brazil",
    description: "Planting native trees to restore degraded rainforest areas and protect biodiversity.",
    longDescription:
      "This comprehensive reforestation project focuses on restoring degraded areas of the Amazon rainforest by planting native tree species. Working with local communities, we identify priority areas and use sustainable planting techniques to ensure long-term success. The project not only helps combat climate change by sequestering carbon but also protects biodiversity and supports indigenous communities.",
    image: "/amazon-rainforest.png",
    raised: 45000,
    goal: 100000,
    supporters: 1240,
    impact: "12,000 trees planted",
    website: "https://example.com",
    updates: [
      {
        date: "2025-01-15",
        title: "Milestone: 10,000 Trees Planted!",
        content: "We've successfully planted our 10,000th tree this month. The survival rate is excellent at 92%.",
      },
      {
        date: "2024-12-20",
        title: "New Partnership Announced",
        content: "Partnering with local indigenous communities to expand our restoration efforts.",
      },
    ],
  }

  const progress = (project.raised / project.goal) * 100

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Back button */}
      <Button variant="ghost" asChild>
        <Link href="/app/projects">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </Button>

      {/* Hero section */}
      <Card className="glass-panel overflow-hidden">
        <div className="relative h-80">
          <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover" />
          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">{project.category}</Badge>
        </div>

        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">{project.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold text-primary">${(project.raised / 1000).toFixed(0)}K</p>
                <p className="text-muted-foreground">raised of ${(project.goal / 1000).toFixed(0)}K goal</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{progress.toFixed(0)}%</p>
                <p className="text-sm text-muted-foreground">funded</p>
              </div>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">Supporters</span>
              </div>
              <p className="text-2xl font-bold">{project.supporters.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Impact</span>
              </div>
              <p className="text-2xl font-bold text-accent">{project.impact}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Your Support</span>
              </div>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
          </div>

          {/* Action button */}
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 glow-turquoise">
            <Heart className="w-5 h-5 mr-2" />
            Support This Project
          </Button>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="about" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-4">
          <Card className="glass-panel p-6 space-y-4">
            <h2 className="text-2xl font-bold">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            <div className="pt-4">
              <Button variant="outline" asChild>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="updates" className="space-y-4">
          {project.updates.map((update, index) => (
            <Card key={index} className="glass-panel p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{update.title}</h3>
                <span className="text-sm text-muted-foreground">{update.date}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{update.content}</p>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="impact" className="space-y-4">
          <Card className="glass-panel p-6 space-y-6">
            <h2 className="text-2xl font-bold">Impact Metrics</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Trees Planted</p>
                <p className="text-3xl font-bold text-primary">12,000</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">CO2 Sequestered</p>
                <p className="text-3xl font-bold text-accent">240 tons</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Area Restored</p>
                <p className="text-3xl font-bold">45 hectares</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Survival Rate</p>
                <p className="text-3xl font-bold text-primary">92%</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
