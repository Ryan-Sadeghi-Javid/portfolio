import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
          {
      title: "Software Engineering (Co-op)",
      company: "Augmenta",
      location: "Ottawa, ON",
      period: "01/2026- 04/2026",
      
    },
      {
      title: "Software Engineering (Co-op)",
      company: "Astan",
      location: "New York, NY",
      period: "05/2025 - 08/2025",
      
    },
    {
      title: "Software Engineering (Co-op)",
      company: "Unity Health Toronto",
      location: "Toronto, ON",
      period: "09/2024 - 12/2024",
      description:
        "Contributed to the development of eAMS, an advanced clinical decision support platform improving medication safety and prescribing efficiency. Worked on full-stack enhancements, backend APIs, and EHR system integrations in a healthcare-grade, privacy-conscious environment.",
      technologies: ["JavaScript", "Java", "Python", "Docker", "Postman", "Spring Framework", "Node.js", "React", "MongoDB"],
    },
    {
      title: "Software Engineering (Co-op)",
      company: "Crosslinx Transit Solutions",
      location: "Toronto, ON",
      period: "01/2024 - 04/2024",
      description:
        "Built automation tools and data pipelines for SCADA-based transit systems using PowerShell and Python. Streamlined diagnostics, scheduling, and system monitoring by scripting infrastructure-level integrations and processing operational datasets to support smarter transit planning and maintenance.",
      technologies: ["Python", "PowerShell", "SCADA", "Data Processing", "Automation","Scripting","Infrastructure","Transit Tech"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through various roles and companies, building expertise and delivering impactful
            solutions.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
