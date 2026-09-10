import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const groups = [
  {
    label: "Data & ML",
    skills: ["Python", "Random Forest / scikit-learn", "SQL & MySQL", "Power BI", "MongoDB"]
  },
  {
    label: "Engineering",
    skills: ["Laravel & Blade", "Angular", "PHP", "JavaScript", "HTML/CSS"]
  },
  {
    label: "QA & Tools",
    skills: ["Selenium", "JIRA", "Git version control", "Microsoft Office suite"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Skills</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {groups.map((group) => (
            <Card key={group.label} className="p-6 space-y-4">
              <h3 className="text-lg text-primary">{group.label}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}