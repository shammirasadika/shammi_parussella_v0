"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Loader2, Sparkles, MessageSquare } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Shammi's AI Digital Twin powered by RAG. Ask me anything about his experience, skills, projects, or career!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error calling chat API:', error)
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm experiencing technical difficulties. Please try again later.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="chat-with-ai" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl font-bold text-white">Chat with My AI Digital Twin</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Powered by RAG (Retrieval-Augmented Generation) with Upstash Vector + Groq
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="bg-transparent backdrop-blur border-cyan-500/20 shadow-2xl">
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-muted/20 to-background/50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                          : "bg-muted/80 text-foreground border border-border/40"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold text-cyan-400">AI Digital Twin</span>
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      <p className={`text-[10px] mt-2 ${message.role === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted/80 rounded-2xl p-4 border border-border/40">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-cyan-400" />
                        <span className="text-sm text-muted-foreground">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-border/40 p-6 bg-muted/20">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about experience, skills, projects, education..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-background border border-border/40 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 rounded-xl"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span>💬 Ask me anything</span>
                  <span>•</span>
                  <span>⚡ Real-time responses</span>
                  <span>•</span>
                  <span>🧠 RAG-powered knowledge</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Questions */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground text-center mb-4">Try asking:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "What's your .NET experience?",
                "Tell me about your projects",
                "What skills do you have?",
                "What's your educational background?",
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="px-4 py-2 text-xs bg-muted/50 hover:bg-muted text-foreground rounded-lg border border-border/40 hover:border-cyan-500/50 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
