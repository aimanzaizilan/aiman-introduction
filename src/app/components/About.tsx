import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

const experience = [
  {
    role: "FullStack Developer",
    company: "Telekom Malaysia",
    programme: "Protégé Programme · Tech Architecture & Delivery",
    period: "Current",
    current: true,
    bullets: [
      "Building production features with Laravel and Angular as part of the Tech Architecture & Delivery team",
      "Developing and maintaining full-stack web applications used across internal TM systems",
      "Participating in the national Protégé programme for graduate talent development"
    ]
  },
  {
    role: "Quality Analyst",
    company: "Weride Malaysia",
    programme: "",
    period: "Previous",
    current: false,
    bullets: [
      "Conducted system testing and data validation across autonomous vehicle software modules",
      "Identified defects and ensured data integrity throughout the QA pipeline",
      "Collaborated with engineering teams to document and resolve test failures"
    ]
  }
]

const specializations = [
  { label: "Data Science", desc: "End-to-end ML pipelines, model training & deployment" },
  { label: "Big Data", desc: "Large-scale dataset processing and analytics" },
  { label: "Mathematics", desc: "Statistical modelling, linear algebra, optimization" },
  { label: "Full-Stack Dev", desc: "Laravel, Angular, production web applications" },
  { label: "SQL Analytics", desc: "Complex queries, reporting, data warehousing" },
  { label: "Power BI", desc: "Dashboard design, DAX, business intelligence" }
]

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl lg:text-4xl mb-6 text-primary">Background</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {"Computer Science (Hons) graduate from Universiti Teknologi MARA specializing in Data Science and Big Data. I specialize in data science, mathematics, and big data — with hands-on experience across the full pipeline, from cleaning and analyzing datasets to building and deploying machine learning models and production web applications."}
          </p>
        </div>

        {/* Bio narrative */}
        <div className="mb-16">
          <Card className="p-8 max-w-3xl mx-auto">
            <h3 className="text-xl mb-6 text-primary">In my own words</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {"I'm a Computer Science graduate (Data Science specialization) from Universiti Teknologi MARA, currently working as a FullStack Developer at Telekom Malaysia under their Protégé programme, part of the Tech Architecture & Delivery team."}
              </p>
              <p>
                {"I specialize in data science, mathematics, and big data, with hands-on experience across the full pipeline — from cleaning and analyzing datasets to building and deploying machine learning models and production web applications."}
              </p>
              <p>
                {"Previously worked as a Quality Analyst at Weride Malaysia, focused on system testing and data validation."}
              </p>
            </div>
          </Card>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center text-primary">Professional Experience</h3>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Card key={i} className="p-8">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg text-primary">{job.role}</h4>
                      <p className="text-muted-foreground font-medium">{job.company}</p>
                      {job.programme && (
                        <p className="text-sm text-muted-foreground">{job.programme}</p>
                      )}
                    </div>
                    <Badge variant={job.current ? "default" : "outline"} className="self-start">
                      {job.period}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl mb-8 text-center text-primary">Specializations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((s, i) => (
              <Card key={i} className="p-6">
                <p className="text-primary font-medium mb-1">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}