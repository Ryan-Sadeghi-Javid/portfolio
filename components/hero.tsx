"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const titles = [
    "Full-Stack Software Engineer",
    "Electrical Engineer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Mobile App Developer",
    "AI/ML Engineer",
    "Systems Architect",
    "Cloud Engineer",
    "Data Engineer",
    "Automation Engineer",
    "Systems Engineer",
    "Innovation Enthusiast",
    "Digital Problem Solver"
  ]

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (charIndex < currentTitle.length) {
            setText(currentTitle.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setText(currentTitle.slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Finished deleting, move to next title
            setIsDeleting(false)
            setTitleIndex((titleIndex + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Faster when deleting

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex, titles])


   const handleEmailClick = () => {
    const email = "javidryan7@gmail.com" // Replace with your actual email
    const mailtoLink = `mailto:${email}`
    window.location.href = mailtoLink
  }

    const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/Ryan_Javid_Winter_2026_Resume.pdf" // Put your resume.pdf in the public folder
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Ryan_Sadeghi_Javid_Resume.pdf" // Customize the download filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGitHubClick = () => {
    window.open("https://github.com/Ryan-Sadeghi-Javid", "_blank") // Replace with your GitHub username
  }

    const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/ryan-sadeghi-javid-a1073a15a/", "_blank") // Replace with your GitHub username
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ryan Javid
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="min-h-[2rem]">
              {text}
              <span className="animate-pulse text-blue-600">|</span>
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
Full-stack developer and electrical engineer at the University of Waterloo, creating performant, scalable applications with modern tech stacks and intuitive user interfaces.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" onClick={handleResumeDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="hover:text-blue-600" onClick={handleGitHubClick}>
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-blue-600" onClick={handleLinkedinClick}>
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-blue-600" onClick={handleEmailClick}>
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
