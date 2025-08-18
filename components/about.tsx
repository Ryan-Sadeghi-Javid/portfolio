import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"
import { Terminal } from "@/components/terminal"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m a builder at heart — a full-stack developer and UWaterloo engineering student with 5+ years of experience turning ideas into clean, scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey in computer science with a fascination for how things work under the hood. What began as curiosity about building websites evolved into a deep passion for creating scalable, user-centric applications.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, contributing to products that serve millions of users. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I’m not coding, you can find me playing pickleball, hitting the gym, going for a run, or experimenting in the kitchen — always looking for the next challenge, whether it’s in code or cooking!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <highlight.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
