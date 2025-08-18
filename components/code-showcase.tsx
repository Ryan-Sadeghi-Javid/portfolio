"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Copy, Check } from "lucide-react"

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const codeExamples = [
    {
      title: "React Hook",
      language: "TypeScript",
      code: `// Custom hook for API calls with caching
import { useState, useEffect, useCallback } from 'react'

interface UseApiOptions<T> {
  url: string
  dependencies?: any[]
  transform?: (data: any) => T
}

export function useApi<T>({ url, dependencies = [], transform }: UseApiOptions<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch')
      
      const result = await response.json()
      const transformedData = transform ? transform(result) : result
      
      setData(transformedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [url, transform])

  useEffect(() => {
    fetchData()
  }, [fetchData, ...dependencies])

  return { data, loading, error, refetch: fetchData }
}`,
    },
    {
      title: "Algorithm",
      language: "JavaScript",
      code: `// Optimized binary search with bounds checking
function binarySearch(arr, target, compareFn = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return -1
  
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    // Prevent integer overflow
    const mid = left + Math.floor((right - left) / 2)
    const comparison = compareFn(arr[mid], target)
    
    if (comparison === 0) return mid
    if (comparison < 0) left = mid + 1
    else right = mid - 1
  }
  
  return -1
}

// Usage examples:
const numbers = [1, 3, 5, 7, 9, 11, 13]
console.log(binarySearch(numbers, 7)) // Output: 3

const objects = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 5, name: 'Charlie' }
]
const result = binarySearch(objects, { id: 3 }, (a, b) => a.id - b.id)`,
    },
    {
      title: "System Design",
      language: "Architecture",
      code: `// Microservices Architecture Pattern
interface ServiceConfig {
  name: string
  port: number
  dependencies: string[]
  healthCheck: string
}

class MicroserviceOrchestrator {
  private services: Map<string, ServiceConfig> = new Map()
  private loadBalancer: LoadBalancer
  private circuitBreaker: CircuitBreaker
  
  constructor() {
    this.loadBalancer = new LoadBalancer()
    this.circuitBreaker = new CircuitBreaker({
      failureThreshold: 5,
      timeout: 60000
    })
  }
  
  async registerService(config: ServiceConfig): Promise<void> {
    // Validate dependencies
    for (const dep of config.dependencies) {
      if (!this.services.has(dep)) {
        throw new Error(\`Dependency \${dep} not found\`)
      }
    }
    
    this.services.set(config.name, config)
    await this.loadBalancer.addInstance(config)
    
    // Start health monitoring
    this.startHealthCheck(config)
  }
  
  private async startHealthCheck(config: ServiceConfig): Promise<void> {
    setInterval(async () => {
      try {
        await this.circuitBreaker.execute(() => 
          fetch(\`http://localhost:\${config.port}\${config.healthCheck}\`)
        )
      } catch (error) {
        console.error(\`Health check failed for \${config.name}\`)
        await this.loadBalancer.removeInstance(config.name)
      }
    }, 30000)
  }
}`,
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code")
    }
  }

  const runCode = () => {
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 2000)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Code Examples
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm" onClick={runCode} disabled={isRunning}>
              <Play className="h-4 w-4" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          {codeExamples.map((example, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(index)}
            >
              {example.title}
            </Button>
          ))}
        </div>

        <div className="mb-2">
          <Badge variant="secondary">{codeExamples[activeTab].language}</Badge>
        </div>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{codeExamples[activeTab].code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}
