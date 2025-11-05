"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  "All",
  "Reforestation",
  "Ocean Cleanup",
  "Renewable Energy",
  "Sustainable Agriculture",
  "Wildlife Conservation",
]

export function ProjectsFilters() {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search projects..." className="pl-10" />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
