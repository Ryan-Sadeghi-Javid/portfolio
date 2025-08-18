import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "HTML5", "CSS3", "MaterializeCSS", "JavaFX"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Socket.io","GraphQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Nginx", "Postman", "Vercel", "Git", "GitHub Actions", "Jest", "Cypress", "Webpack"],
    },
    {
      title: "Mobile & Other",
      skills: ["React Native", "Flutter", "Figma", "OpenAI API", "Scrum", "REST APIs", "TensorFlow"],
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
