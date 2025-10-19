import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {

  
  const projects = [
    {
      title: "Pulse Relief",
      description:
        "A transparent aid platform that connects donors, NGOs, recipients, and merchants end-to-end on the XRP Ledger. Donors give via Stripe (fiat) while NGO-issued vouchers (IOUs) are delivered as QR/SMS, redeemed instantly by merchants, and recorded on-chain for auditable, tamper-proof flow. Built with Next.js + Tailwind (web), Flask + xrpl-py (API/ledger), and Supabase (auth/logs), with Face ID–secured recipient wallets for passwordless, fraud-resistant access.",
      image: "/pulse_r.png?height=200&width=400",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Flask", "Python", "Node.js", "xrpl-py", "XRP Ledger (XRPL)", "Stripe API", "Supabase", "PostgreSQL", "Decentralized Identifiers (DIDs)", "Biometric Face ID (embeddings & liveness)", "QR/SMS Voucher Delivery"],
      github: "https://github.com/peterson-htn252/PulseRelief",
      live: "https://relief-demo.petersonguo.com/",
      featured: true,
    },
    {
      title: "Healic",
      description:
        "A mental health web platform enabling anonymous peer-to-peer chat, resource sharing, and charitable giving. Integrates the OpenAI API to generate context-aware message suggestions using the user’s recent conversation history, helping users initiate or continue meaningful dialogue. Built to foster connection and support through real-time communication and an intuitive, accessible UI.",
      image: "/healic_image.png?height=200&width=400",
      technologies: ["React.js", "MaterializeCSS", "Node.js", "Express.js", "Socket.io", "OpenAI API", "Full-Stack"],
      github: "https://github.com/Ryan-Sadeghi-Javid/healic",
      live: "https://healic.vercel.app/",
      featured: true,
    },

    {
      title: "Mainpro+ Credit Management System",
      description: "A full-stack web platform built for Unity Health Toronto to automate Mainpro+ credit submissions, certificate generation, and compliance tracking for physicians. Includes secure role-based access, email verification, dynamic PDF creation, and an admin dashboard to manage users and credit records at scale. \n\n*Built for Unity Health Toronto; codebase is proprietary and cannot be shared publicly.*`",
      image: "/mainpro_image.png?height=200&width=400",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Email Verification", "PDF Generation", "Full-Stack"],
      github: null,
      live: "https://easthma.ca/mp_instructions",
      featured: false,
    },

      {
      title: "Task Manger Application",
      description:
      "A full-stack task management platform with user authentication, smart task filtering, and OpenAI-powered task descriptions. Features JWT-based auth, responsive UI with dark mode, and a clean, decoupled architecture built using the MERN stack. Designed for efficient organization, collaboration, and creativity.",
      image: "/task_manger.png?height=200&width=400",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth", "OpenAI API", "Full-Stack"],
      github: "https://github.com/Ryan-Sadeghi-Javid/task-manger-missionperform",
      live: "https://task-manger-missionperform.vercel.app/",
      featured: false,
    },

        {
      title: "Trading Data ETL Pipeline",
      description: "An ETL-based analytics system built in C++ that processes 60+ years of country-level time-series data to model statistical relationships as a dynamic graph. Combines a custom BST for efficient queries and a labeled graph engine to reveal connections between countries based on metrics like health, agriculture, and economics.",
      image: "/ETL_pipeline.png?height=200&width=400",
      technologies: ["C++", "ETL", "Data Structures and Algorithms", "Graph Algorithms", "Trading Data", "Performance Engineering"],
      github: "https://github.com/Ryan-Sadeghi-Javid/ETL-pipeline",
      live: "#",
      featured: false,
    },
    {
      title: "Java Physics Engine",
      description:
        "A performant 2D physics engine built in Java and JavaFX, featuring real-time simulation of rigid body dynamics, collision detection, and motion integration. Developed with a modular, object-oriented architecture and an interactive GUI for visualizing forces, motion, and collisions in real time.",
      image: "/java_physics_image.png?height=200&width=400",
      technologies: ["Java", "JavaFX", "OOP", "Physics Simulation", "Collision Detection", "Game Dev"],
      github: "https://github.com/Ryan-Sadeghi-Javid/Physics-Engine",
      linkType: "download",
      live: "/downloads/MarioGameDemoProject.zip",
      featured: false,
    },
    {
      title: "Mindbridge: Communication Platform",
      description: "A web-based assistive tool built to help nonverbal children on the autism spectrum express needs and emotions through tap-based visual cues and voice output. Designed for accessibility, empathy, and ease of use.",
      image: "/mindbridge_image.jpg?height=200&width=400",
      technologies: ["React", "Node.js", "Twilio API", "Auth0", "Accessibility", "Assistive Tech"],
      github: "https://github.com/Ryan-Sadeghi-Javid/MindBridge.study",
      live: "#",
      featured: true,
    },


  ]


  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
{project.featured && (
  <a
    href={
      project.title === "Mindbridge: Communication Platform"
        ? "https://devpost.com/software/mindbridge.study"
        : project.title === "Pulse Relief"
        ? "https://devpost.com/software/ripplerelief"
        : "https://devpost.com/software/healic"
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    <Badge className="absolute top-4 left-4 bg-blue-600 cursor-pointer">
      Hackathon Winner
    </Badge>
  </a>
)}


            
            
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    {project.github && project.github !== "#" && (
  <Button variant="ghost" size="icon" asChild>
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <Github className="h-4 w-4" />
    </a>
  </Button>
)}
{project.live && project.live !== "#" && (
  <Button variant="outline" size="sm" asChild className="text-xs px-3">
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      download={project.linkType === "download"}
    >
      {project.linkType === "download" ? "Download Demo" : "Live Site"}
    </a>
  </Button>
)}

                  </div>
                </CardTitle>
                <CardDescription>
  {project.description.split("\n\n").map((line, i) => (
    <p key={i} className={line.startsWith("*") ? "italic mt-2" : ""}>
      {line.replace(/\*/g, "")}
    </p>
  ))}

  
</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Ryan-Sadeghi-Javid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>

    
  )


}
