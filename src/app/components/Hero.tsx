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
              {/* Abstract data/code graphic */}
              <svg viewBox="0 0 320 320" className="w-full h-full opacity-80" aria-hidden="true">
                <defs>
                  <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.03" />
                  </linearGradient>
                  <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Outer ring */}
                <circle cx="160" cy="160" r="140" fill="url(#heroGrad1)" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
                {/* Inner ring */}
                <circle cx="160" cy="160" r="100" fill="none" stroke="var(--primary)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 6" />
                {/* Center node */}
                <circle cx="160" cy="160" r="36" fill="url(#heroGrad2)" />
                {/* Center icon: stacked layers (data stack) */}
                <rect x="143" y="152" width="34" height="5" rx="2" fill="var(--primary)" fillOpacity="0.6" />
                <rect x="143" y="159" width="34" height="5" rx="2" fill="var(--primary)" fillOpacity="0.4" />
                <rect x="143" y="166" width="34" height="5" rx="2" fill="var(--primary)" fillOpacity="0.25" />
                {/* Orbit dots */}
                <circle cx="160" cy="20" r="6" fill="var(--primary)" fillOpacity="0.5" />
                <circle cx="280" cy="120" r="5" fill="var(--primary)" fillOpacity="0.35" />
                <circle cx="248" cy="272" r="7" fill="var(--primary)" fillOpacity="0.4" />
                <circle cx="72" cy="272" r="5" fill="var(--primary)" fillOpacity="0.3" />
                <circle cx="40" cy="120" r="6" fill="var(--primary)" fillOpacity="0.45" />
                {/* Connector lines from center to orbit dots */}
                <line x1="160" y1="124" x2="160" y2="26" stroke="var(--primary)" strokeOpacity="0.15" strokeWidth="1" />
                <line x1="191" y1="135" x2="274" y2="123" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="184" y1="187" x2="245" y2="265" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="136" y1="187" x2="75" y2="265" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
                <line x1="129" y1="135" x2="46" y2="123" stroke="var(--primary)" strokeOpacity="0.15" strokeWidth="1" />
                {/* Small label chips */}
                <rect x="96" y="56" width="56" height="18" rx="9" fill="var(--primary)" fillOpacity="0.08" />
                <text x="124" y="69" textAnchor="middle" fontSize="8" fill="var(--primary)" fillOpacity="0.6" fontFamily="monospace">ML / AI</text>
                <rect x="200" y="210" width="64" height="18" rx="9" fill="var(--primary)" fillOpacity="0.08" />
                <text x="232" y="223" textAnchor="middle" fontSize="8" fill="var(--primary)" fillOpacity="0.6" fontFamily="monospace">Power BI</text>
                <rect x="54" y="190" width="56" height="18" rx="9" fill="var(--primary)" fillOpacity="0.08" />
                <text x="82" y="203" textAnchor="middle" fontSize="8" fill="var(--primary)" fillOpacity="0.6" fontFamily="monospace">Laravel</text>
                <rect x="208" y="76" width="60" height="18" rx="9" fill="var(--primary)" fillOpacity="0.08" />
                <text x="238" y="89" textAnchor="middle" fontSize="8" fill="var(--primary)" fillOpacity="0.6" fontFamily="monospace">Angular</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}