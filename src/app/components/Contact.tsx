import { Badge } from "./ui/badge"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline">Get In Touch</Badge>
            <h2 className="text-3xl lg:text-4xl text-primary">{"Let's talk data."}</h2>
            <p className="text-lg text-muted-foreground">
              Open to full-time roles and collaborations across data science and full-stack development. Based in Selangor, working with teams anywhere.
            </p>
          </div>

          <a
            href="mailto:aimanzaizilan@gmail.com"
            className="inline-flex items-center gap-2.5 text-primary hover:underline underline-offset-4"
          >
            <Mail className="w-4 h-4" />
            aimanzaizilan@gmail.com
          </a>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            Selangor, Malaysia
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}