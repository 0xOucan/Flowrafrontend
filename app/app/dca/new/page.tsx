import { DCASetupWizard } from "@/components/dca-setup-wizard"

export default function NewDCAPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Create DCA Strategy</h1>
        <p className="text-muted-foreground">Set up your automated investment strategy in a few simple steps</p>
      </div>

      <DCASetupWizard />
    </div>
  )
}
