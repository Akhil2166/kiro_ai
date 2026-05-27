'use client'

import { useState, useRef, useEffect } from 'react'

interface Msg { role: 'user' | 'bot'; text: string }

const responses: Record<string, string> = {
  hello: 'Hello! Welcome to Denz Dental. How can I help you today?',
  hi: 'Hi there! How can I assist you?',
  appointment: 'Call us at +91 80 4567 8900 or use WhatsApp. Mon-Sat 9AM-8PM, Sun 10AM-2PM.',
  book: 'Call +91 80 4567 8900 or message on WhatsApp to book.',
  services: 'We offer: Implants, Whitening, Root Canal, Orthodontics, Cosmetic Dentistry, Pediatric Care.',
  implant: 'Premium titanium implants with 99% success rate. 2-3 visits over 3-6 months.',
  whitening: 'Professional whitening - up to 8 shades brighter in one visit. From INR 8,000.',
  braces: 'Traditional braces and Invisalign available. Dr. Priya has 12+ years experience.',
  cost: 'Consultations from INR 500. Ask about specific treatments for pricing.',
  price: 'Consultations from INR 500. Ask about specific treatments for pricing.',
  location: '42, MG Road, Indiranagar, Bangalore, Karnataka 560038.',
  hours: 'Mon-Sat: 9AM-8PM, Sunday: 10AM-2PM.',
  emergency: 'Call +91 80 4567 8900 immediately for emergencies.',
}

function getReply(input: string): string {
  const l = input.toLowerCase()
  for (const [k, v] of Object.entries(responses)) {
    if (l.includes(k)) return v
  }
  return 'Thank you! Call +91 80 4567 8900 or ask about services, appointments, or pricing.'
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: 'Hello! I\'m the Denz AI assistant. Ask about services, appointments, or pricing!' }
  ])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = () => {
    if (!input.trim()) return
    setMsgs((p) => [...p, { role: 'user', text: input.trim() }])
    const q = input
    setInput('')
    setTimeout(() => setMsgs((p) => [...p, { role: 'bot', text: getReply(q) }]), 500)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-[95] fab-btn bg-primary text-white"
        aria-label="Chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-20 left-6 z-[95] w-[320px] bg-white chat-widget flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white px-5 py-4">
            <p className="font-figtree text-[14px]">Denz AI Assistant</p>
            <p className="text-[11px] text-white/70">Online</p>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[280px]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-btn text-[13px] leading-relaxed ${
                  m.role === 'user' ? 'bg-primary text-white' : 'bg-surface text-heading'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a question..."
              className="flex-1 bg-surface rounded-btn px-3 py-2 text-[13px] text-heading placeholder:text-muted outline-none focus:ring-1 focus:ring-primary"
            />
            <button onClick={send} className="w-8 h-8 rounded-btn bg-primary text-white flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
