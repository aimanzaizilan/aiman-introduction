import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const roles = [
  {
    title: "FullStack Developer, Protégé Programme",
    company: "Telekom Malaysia",
    department: "Tech Architecture & Delivery",
    period: "Aug 2026 — Current",
    current: true,
    bullets: [
      "Built the end-to-end \"Product Pricing\" module using Laravel and Angular, covering migrations, models, APIs, and UI components",
      "Fixed file-preview and thumbnail-rendering issues by resolving signed URL generation and storage routing bugs",
      "Diagnosed and corrected backend data-mapping logic to restore accurate chart visualizations on analytics dashboards",
      "Built automated QR code and PDF generation features across Quizzes, Surveys, and Pre/Post Tests using Laravel and Blade",
      "Resolved session authorization restrictions to enable attendee self check-in while maintaining admin role gating"
    ]
  },
  {
    title: "Quality Analyst",
    company: "Weride Malaysia SDN BHD",
    department: "IT Department",
    period: "Mar 2026 — Jul 2026",
    current: false,
    bullets: [
      "Executed manual and functional testing on applications and platforms to ensure alignment with business requirements",
      "Performed data validation and verification checks across internal platforms for accuracy and consistency",
      "Identified, documented, and reported application bugs to support timely resolution",
      "Collaborated cross-team with developers and operations to replicate errors and clarify requirements"
    ]
  }
]

export function Career() {
  return (
    <section id="career" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Work History</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional roles spanning full-stack development, quality assurance, and enterprise software delivery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {roles.map((role, i) => (
            <div key={i} className="relative flex gap-6">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${role.current ? "bg-primary" : "bg-muted-foreground/40"}`} />
                {i < roles.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              <div className={`pb-12 ${i === roles.length - 1 ? "pb-0" : ""} flex-1 min-w-0`}>
                <Card className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg text-primary">{role.title}</h3>
                      <p className="text-muted-foreground font-medium">{role.company}</p>
                      <p className="text-sm text-muted-foreground">{role.department}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      <Badge variant={role.current ? "default" : "outline"} className="text-xs">
                        {role.period}
                      </Badge>
                      {role.current && (
                        <span className="text-xs text-muted-foreground">Current role</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {role.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}