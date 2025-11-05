"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, TrendingUp, Heart } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Amazon Rainforest Restoration",
    category: "Reforestation",
    location: "Brazil",
    description: "Planting native trees to restore degraded rainforest areas and protect biodiversity.",
    image: "/amazon-rainforest.png",
    raised: 45000,
    goal: 100000,
    supporters: 1240,
    impact: "12,000 trees planted",
  },
  {
    id: 2,
    name: "Ocean Plastic Removal",
    category: "Ocean Cleanup",
    location: "Pacific Ocean",
    description: "Deploying advanced systems to remove plastic waste from ocean gyres.",
    image: "/ocean-cleanup-effort.png",
    raised: 78000,
    goal: 150000,
    supporters: 2100,
    impact: "50 tons removed",
  },
  {
    id: 3,
    name: "Solar Power for Villages",
    category: "Renewable Energy",
    location: "Kenya",
    description: "Installing solar panels in rural communities to provide clean, reliable electricity.",
    image: "/solar-panels-village.jpg",
    raised: 32000,
    goal: 80000,
    supporters: 890,
    impact: "15 villages powered",
  },
  {
    id: 4,
    name: "Regenerative Farming Initiative",
    category: "Sustainable Agriculture",
    location: "India",
    description: "Teaching and implementing regenerative agriculture practices to restore soil health.",
    image: "/regenerative-farming.jpg",
    raised: 56000,
    goal: 120000,
    supporters: 1560,
    impact: "500 farmers trained",
  },
  {
    id: 5,
    name: "Coral Reef Restoration",
    category: "Ocean Cleanup",
    location: "Great Barrier Reef",
    description: "Growing and transplanting coral to restore damaged reef ecosystems.",
    image: "/vibrant-coral-reef.png",
    raised: 41000,
    goal: 90000,
    supporters: 1120,
    impact: "3,000 corals planted",
  },
  {
    id: 6,
    name: "Wildlife Corridor Protection",
    category: "Wildlife Conservation",
    location: "Tanzania",
    description: "Protecting and restoring wildlife corridors to enable safe animal migration.",
    image: "/wildlife-corridor-africa.jpg",
    raised: 67000,
    goal: 140000,
    supporters: 1890,
    impact: "200km protected",
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const progress = (project.raised / project.goal) * 100

        return (
          <Card key={project.id} className="glass-panel overflow-hidden hover:glow-turquoise transition-all group">
            {/* Project image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">{project.category}</Badge>
            </div>

            {/* Project details */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold">{progress.toFixed(0)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-primary">${(project.raised / 1000).toFixed(0)}K</span>
                  <span className="text-muted-foreground">of ${(project.goal / 1000).toFixed(0)}K</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{project.supporters.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">{project.impact}</span>
                </div>
              </div>

              {/* Action button */}
              <Button className="w-full bg-primary hover:bg-primary/90 group-hover:glow-turquoise">
                <Heart className="w-4 h-4 mr-2" />
                Support Project
              </Button>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
