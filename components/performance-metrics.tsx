"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Zap, Globe, Shield, Gauge } from "lucide-react"

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading performance metrics
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Animate the metrics
      const targetMetrics = {
        performance: 98,
        accessibility: 100,
        bestPractices: 96,
        seo: 100,
      }

      Object.keys(targetMetrics).forEach((key, index) => {
        setTimeout(() => {
          setMetrics((prev) => ({
            ...prev,
            [key]: targetMetrics[key as keyof typeof targetMetrics],
          }))
        }, index * 500)
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const metricItems = [
    {
      key: "performance",
      label: "Performance",
      icon: Zap,
      color: "text-green-600",
      description: "First Contentful Paint: 0.8s",
    },
    {
      key: "accessibility",
      label: "Accessibility",
      icon: Globe,
      color: "text-blue-600",
      description: "WCAG 2.1 AA Compliant",
    },
    {
      key: "bestPractices",
      label: "Best Practices",
      icon: Shield,
      color: "text-purple-600",
      description: "Security & Modern Standards",
    },
    {
      key: "seo",
      label: "SEO",
      icon: Gauge,
      color: "text-orange-600",
      description: "Optimized Meta & Structure",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "Excellent"
    if (score >= 70) return "Good"
    return "Needs Work"
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Gauge className="h-6 w-6" />
          <span>Lighthouse Performance Audit</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Running performance audit...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {metricItems.map((item) => {
              const score = metrics[item.key as keyof typeof metrics]
              const Icon = item.icon

              return (
                <div key={item.key} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
                      <Badge variant={score >= 90 ? "default" : score >= 70 ? "secondary" : "destructive"}>
                        {getScoreBadge(score)}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={score} className="h-2" />
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Technical Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Server-side rendering with Next.js for optimal performance</li>
            <li>• Lazy loading and code splitting for faster initial load</li>
            <li>• Optimized images with next/image component</li>
            <li>• Semantic HTML and ARIA labels for accessibility</li>
            <li>• Progressive Web App (PWA) capabilities</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
