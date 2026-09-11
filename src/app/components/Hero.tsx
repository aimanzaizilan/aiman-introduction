import { Button } from "./ui/button"
import { ArrowDown, Download, MapPin } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm text-primary">Data Science & Full-Stack Development</span>
              </div>

              <h1 className="text-4xl lg:text-6xl text-primary">
                Muhammad Aiman Bin Zaizilan
              </h1>

              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl text-muted-foreground">
                  Data science graduate and full-stack developer. I build the pipeline end to end — from raw dataset to deployed product.
                </h2>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Computer Science (Hons) graduate from Universiti Teknologi MARA specializing in Data Science and Big Data.
                  Currently a FullStack Developer at Telekom Malaysia, building production features with Laravel and Angular,
                  while specializing in machine learning, SQL analytics, and Power BI dashboards.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Bandar Baru Bangi, Selangor, Malaysia</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToProjects} className="group">
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" />
                  View Resume
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Data & ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">3.5</div>
                <div className="text-sm text-muted-foreground">{"Dean's List Sem 5"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">7th</div>
                <div className="text-sm text-muted-foreground">Top Coders Challenge</div>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="Muhammad Aiman Bin Zaizilan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}