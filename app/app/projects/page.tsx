import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsFilters } from "@/components/projects-filters"

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Regenerative Projects</h1>
        <p className="text-muted-foreground">Choose projects to support with a portion of your yield</p>
      </div>

      {/* Stats banner */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-panel rounded-lg p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Total Projects</p>
          <p className="text-2xl font-bold text-primary">24</p>
        </div>
        <div className="glass-panel rounded-lg p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Total Donated</p>
          <p className="text-2xl font-bold text-accent">$180K+</p>
        </div>
        <div className="glass-panel rounded-lg p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Your Impact</p>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
      </div>

      {/* Filters */}
      <ProjectsFilters />

      {/* Projects grid */}
      <ProjectsGrid />
    </div>
  )
}
