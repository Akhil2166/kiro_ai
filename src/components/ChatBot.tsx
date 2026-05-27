'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'bot'
  text: string
}

const botResponses: Record<string, string> = {
  hello: 'Hello! Welcome to Denz Dental. How can I help you today?',
  hi: 'Hi there! Welcome to Denz. How can I assist you?',
  appointment: 'I can help you book an appointment! Call us at +91 80 4567 8900 or click the WhatsApp button. Hours: Mon-Sat 9AM-8PM, Sun 10AM-2PM.',
  book: 'To book, call +91 80 4567 8900 or message us on WhatsApp. You can also email hello@denz.in.',
  services: 'We offer: Dental Implants, Teeth Whitening, Root Canal, Orthodontics, Cosmetic Dentistry, and Pediatric Care. Which interests you?',
  implant: 'Our implant procedure uses premium titanium with 99% success rate. Typically 2-3 visits over 3-6 months. Want a consultation?',
  whitening: 'Professional whitening brightens up to 8 shades in one visit! We use LED-accelerated technology. Starting at INR 8,000.',
  braces: 'We offer traditional braces and Invisalign. Dr. Priya Sharma has 12+ years experience. Want a consultation?',
  cost: 'Consultations start at INR 500. Ask about specific services for detailed pricing!',
  price: 'Consultations start at INR 500. Ask about specific services for detailed pricing!',
  location: 'We are at 42, MG Road, Indiranagar, Bangalore, Karnataka 560038.',
  hours: 'Mon-Sat: 9AM-8PM, Sunday: 10AM-2PM. Book in advance for weekends!',
  insurance: 'We accept Star Health, HDFC Ergo, ICICI Lombard, and more. Bring your card!',
  emergency: 'For emergencies, call +91 80 4567 8900 immediately.',
  pain: 'For dental pain, call +91 80 4567 8900 right away for assistance.',
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()
  for (const [key, response] of Object.entries(botResponses)) {
    if (lower.includes(key)) return response
  }
  return 'Thank you! For specific inquiries, call +91 80 4567 8900 or ask about services, appointments, pricing, or location.'
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I am the Denz AI assistant. Ask me about services, appointments, pricing, or anything else!' }
  ])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', text: input.trim() }
    setMessages((p) => [...p, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((p) => [...p, { role: 'bot', text: getBotResponse(input) }])
    }, 600)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-[95] fab bg-primary text-white"
        aria-label="Open AI Chat"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-20 left-6 z-[95] w-[340px] max-h-[480px] bg-white chat-widget border border-border flex flex-col overflow-hidden">
          <div className="bg-primary text-white px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <p className="font-heading text-[14px] font-medium">Denz AI Assistant</p>
              <p className="text-[11px] text-white/70">Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[300px]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-xl text-[13px] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-border text-dark-heading rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-border rounded-button px-4 py-2.5 text-[13px] text-dark-heading placeholder:text-bg-secondary outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 rounded-button bg-primary text-white flex items-center justify-center hover:bg-[#6fb8e8] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
