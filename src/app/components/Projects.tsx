import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"

const projects = [
  {
    title: "Temporal Dengue Prediction System",
    category: "Machine Learning",
    description:
      "A web app forecasting dengue risk levels from climate data, using a Random Forest model trained on historical weather patterns pulled live from the OpenWeatherMap API.",
    tech: ["Python", "Random Forest", "Flask", "OpenWeatherMap API"]
  },
  {
    title: "Software Engineer Salary Prediction System",
    category: "Machine Learning",
    description:
      "Predicts expected graduate salaries from qualification inputs, trained on real job vacancy datasets, served through an interactive Streamlit interface.",
    tech: ["Python", "Streamlit", "Flask", "SQL"]
  },
  {
    title: "Global Superstore Sales Dashboard",
    category: "Analytics / BI",
    description:
      "Cleaned and loaded sales data into MySQL, wrote SQL queries to analyze profit and customer trends, built an interactive Power BI dashboard connected live via MySQL Connector/NET.",
    tech: ["MySQL", "SQL", "Power BI", "Excel"]
  },
  {
    title: "Restaurant Reservation System",
    category: "Full-Stack",
    description:
      "Group project building a reservation and management system. Designed and prototyped the backend, handling PHP-to-database connections.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  }
]

const categoryColor: Record<string, string> = {
  "Machine Learning": "bg-primary/10 text-primary",
  "Analytics / BI": "bg-secondary text-secondary-foreground",
  "Full-Stack": "bg-accent text-accent-foreground"
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic and personal projects spanning machine learning pipelines, business intelligence, and full-stack web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex-1 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg text-primary leading-snug">{project.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${categoryColor[project.category] ?? "bg-muted text-muted-foreground"}`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}