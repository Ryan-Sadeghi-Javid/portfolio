import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
  {
    title: "Languages",
    skills: [
      "C++",
      "C",
      "Rust",
      "Python",
      "Go",
      "TypeScript",
      "JavaScript",
      "C#",
      "CSS3",
      "MaterializeCSS",
      "JavaFX",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Socket.io",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "TCP/IP Sockets",
      "Concurrency & Multithreading",
      "IPC (Shared Memory)",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "AWS (S3)",
      "Nginx",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Grafana",
      "Postman",
      "Vercel",
      "Jest",
      "Cypress",
      "Webpack",
      "Linux/UNIX",
      "gdb",
    ],
  },
  {
    title: "Mobile & Other",
    skills: [
      "React Native",
      "Flutter",
      "Figma",
      "OpenAI API",
      "Scrum/Agile",
      "System Design Basics",
      "Profiling & Debugging",
      "TensorFlow",
    ],
  },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    >
                      {skill}
                    </Badge>
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
