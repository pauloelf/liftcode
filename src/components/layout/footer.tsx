import { Github, Linkedin, Mail } from "lucide-react"
import * as motion from "motion/react-client"
import { getCurrentYear } from "@/lib/api"
import { fadeUp } from "@/lib/motion"

const links = [
  {
    key: "Github",
    icon: Github,
    href: "https://github.com/pauloelf",
  },
  {
    key: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/paulosergioelf/",
  },
  {
    key: "E-mail",
    icon: Mail,
    href: "mailto:contato.paulofws@gmail.com",
  },
]

export async function Footer() {
  const year = await getCurrentYear()

  return (
    <motion.footer
      animate="visible"
      className="relative bg-card border-border border-t"
      initial="hidden"
      transition={{ duration: 0.1 }}
      variants={fadeUp(60)}
    >
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 py-12 max-container">
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              aria-label={link.key}
              className="group flex justify-center items-center bg-secondary rounded-md outline-none hover:ring-2 hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent size-10 hover:text-accent transition-colors"
              href={link.href}
              key={link.key}
              rel="noopener noreferrer"
              target="_blank"
            >
              <link.icon className="size-5 group-focus:text-accent" />
            </a>
          ))}
        </div>

        <div className="md:text-left text-center">
          <p className="text-muted-foreground text-sm">
            Desenvolvido por{" "}
            <a
              className="outline-none focus-visible:ring-[3px] focus-visible:ring-ring font-medium text-primary hover:text-foreground focus-visible:text-foreground hover:underline underline-offset-4"
              href="https://github.com/pauloelf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Paulo Sérgio
            </a>
          </p>
          <p className="mt-1 text-muted-foreground text-xs">
            © {year} Todos os direitos reservados
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
