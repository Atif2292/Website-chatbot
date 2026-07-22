import { useEffect, useRef, useState } from 'react'
import { Bot, CalendarPlus, MessageCircle, Send, Sparkles, X } from 'lucide-react'

// ---------------------------------------------------------------------------
// Scripted booking flow. Placeholder time slots for now — when the Calendly
// account is ready, replace `generateSlots` with the real Calendly links.
// Booking currently creates a prefilled Google Calendar invite with
// MEETING_GUEST as guest and every chatbot answer in the description.
// ---------------------------------------------------------------------------
const MEETING_GUEST = 'mohdatif2291@gmail.com'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type Step =
  | 'intro'
  | 'query'
  | 'name'
  | 'email'
  | 'phone'
  | 'company'
  | 'slot'
  | 'joinMethod'
  | 'done'

interface Answers {
  query: string
  name: string
  email: string
  phone: string
  company: string
  slotLabel: string
  slotDate: Date | null
  joinMethod: string
}

interface Slot {
  label: string
  date: Date
}

const JOIN_METHODS = [
  'Microsoft Teams video',
  'Microsoft Teams audio',
  'Telephone call',
]

// Quick-reply intents shown after the greeting instead of free text,
// so typed questions don't get misread as flow answers.
const INTENTS = [
  'Book a consultation',
  'AI services & solutions',
  'Automation for my business',
  'Something else',
]

// Next business days at fixed hours, formatted like Calendly slots.
function generateSlots(count: number): Slot[] {
  const hours: [number, number][] = [
    [10, 0],
    [14, 0],
    [16, 30],
  ]
  const slots: Slot[] = []
  const day = new Date()
  while (slots.length < count) {
    day.setDate(day.getDate() + 1)
    if (day.getDay() === 0 || day.getDay() === 6) continue
    for (const [h, m] of hours) {
      if (slots.length >= count) break
      const d = new Date(day)
      d.setHours(h, m, 0, 0)
      slots.push({
        label: d.toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
        date: d,
      })
    }
  }
  return slots
}

function toGCalStamp(d: Date) {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

function buildCalendarUrl(a: Answers) {
  const start = a.slotDate ?? new Date()
  const end = new Date(start.getTime() + 30 * 60 * 1000)
  const description = [
    `Query: ${a.query}`,
    `Full name: ${a.name}`,
    `Email: ${a.email}`,
    `Phone: ${a.phone}`,
    `Company & location: ${a.company}`,
    `Preferred join method: ${a.joinMethod}`,
    '',
    'Booked via the Aurona AI website chatbot.',
  ].join('\n')
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Aurona AI — Initial Discussion with ${a.name}`,
    dates: `${toGCalStamp(start)}/${toGCalStamp(end)}`,
    details: description,
    add: MEETING_GUEST,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [step, setStep] = useState<Step>('intro')
  const [answers, setAnswers] = useState<Answers>({
    query: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    slotLabel: '',
    slotDate: null,
    joinMethod: '',
  })
  const [slotCount, setSlotCount] = useState(3)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi there! Thank you for contacting Aurona. I'm Sandra, your virtual assistant. How can I help you today?",
    },
  ])
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, typing, open, slotCount, step])

  const botSay = (content: string, after?: () => void) => {
    setTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content }])
      setTyping(false)
      after?.()
    }, 800)
  }

  const showOptions =
    step === 'intro' || step === 'slot' || step === 'joinMethod'

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || typing || showOptions || step === 'done') return
    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInput('')

    switch (step) {
      case 'query':
        if (trimmed.length < 5 || !/[a-zA-Z]/.test(trimmed)) {
          botSay(
            "Could you tell me a bit more about what you're looking for? A short sentence is great.",
          )
          return
        }
        setAnswers((a) => ({ ...a, query: trimmed }))
        botSay('Thank you. May I have your full name please?')
        setStep('name')
        break
      case 'name':
        if (!/^[a-zA-Z][a-zA-Z '.-]{1,49}$/.test(trimmed) || !/[a-zA-Z]{2,}/.test(trimmed)) {
          botSay("That doesn't look like a name — could you enter your full name?")
          return
        }
        setAnswers((a) => ({ ...a, name: trimmed }))
        botSay('Thank you. Please provide your email ID…')
        setStep('email')
        break
      case 'email':
        if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
          botSay(
            "That doesn't look like a valid email — could you double-check it for me?",
          )
          return
        }
        setAnswers((a) => ({ ...a, email: trimmed }))
        botSay('…and your contact telephone number.')
        setStep('phone')
        break
      case 'phone':
        if (!/^[+\d][\d\s-]{6,19}$/.test(trimmed)) {
          botSay(
            "That doesn't look like a valid phone number — could you re-enter it (digits only, 7+ characters)?",
          )
          return
        }
        setAnswers((a) => ({ ...a, phone: trimmed }))
        botSay('Thank you. May I know your company name and location?')
        setStep('company')
        break
      case 'company':
        if (trimmed.length < 3 || !/[a-zA-Z]{2,}/.test(trimmed)) {
          botSay(
            "Could you share your company name and location a bit more clearly?",
          )
          return
        }
        setAnswers((a) => ({ ...a, company: trimmed }))
        botSay(
          'Let me book a time slot for initial discussion. Please select one of the following options:',
        )
        setStep('slot')
        break
    }
  }

  const pickIntent = (intent: string) => {
    if (typing) return
    setMessages((prev) => [...prev, { role: 'user', content: intent }])
    botSay(
      'I can help with that! Please type in a brief description of your query.',
    )
    setStep('query')
  }

  const pickSlot = (slot: Slot) => {
    if (typing) return
    setMessages((prev) => [...prev, { role: 'user', content: slot.label }])
    setAnswers((a) => ({ ...a, slotLabel: slot.label, slotDate: slot.date }))
    botSay(
      'Thank you for selecting the time slot. We will email you a confirmation.',
      () => {
        botSay('How would you like to join the call?')
        setStep('joinMethod')
      },
    )
    setStep('done') // hide slot options while the two messages play out
  }

  const pickJoinMethod = (method: string) => {
    if (typing) return
    setMessages((prev) => [...prev, { role: 'user', content: method }])
    setAnswers((a) => ({ ...a, joinMethod: method }))
    botSay('Thank you. Please check your email.')
    setStep('done')
  }

  const slots = generateSlots(slotCount)
  const calendarReady = answers.joinMethod !== ''

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div className="flex h-[540px] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_hsl(var(--background)/0.9),0_0_40px_hsl(var(--primary)/0.12)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <Bot className="h-5 w-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-accent" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold">Sandra</p>
                <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-accent" /> Virtual Assistant
                  · Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'rounded-br-md bg-primary text-primary-foreground'
                      : 'rounded-bl-md border border-border bg-muted text-foreground'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-muted px-4 py-3">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Intent quick replies */}
            {step === 'intro' && !typing && (
              <div className="flex flex-col gap-2">
                {INTENTS.map((intent) => (
                  <button
                    key={intent}
                    onClick={() => pickIntent(intent)}
                    className="rounded-xl border border-border bg-muted/60 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {intent}
                  </button>
                ))}
              </div>
            )}

            {/* Time slot options (Calendly placeholders) */}
            {step === 'slot' && !typing && (
              <div className="flex flex-col gap-2">
                {slots.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => pickSlot(s)}
                    className="rounded-xl border border-border bg-muted/60 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </button>
                ))}
                {slotCount === 3 && (
                  <button
                    onClick={() => setSlotCount(9)}
                    className="rounded-xl border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Show more time slots
                  </button>
                )}
              </div>
            )}

            {/* Join method options */}
            {step === 'joinMethod' && !typing && (
              <div className="flex flex-col gap-2">
                {JOIN_METHODS.map((m, i) => (
                  <button
                    key={m}
                    onClick={() => pickJoinMethod(m)}
                    className="rounded-xl border border-border bg-muted/60 px-4 py-2.5 text-left text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <span className="mr-2 font-mono text-xs text-primary">
                      {String.fromCharCode(97 + i)}.
                    </span>
                    {m}
                  </button>
                ))}
              </div>
            )}

            {/* Calendar handoff once the flow completes */}
            {step === 'done' && calendarReady && !typing && (
              <div className="flex justify-start">
                <a
                  href={buildCalendarUrl(answers)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Add meeting to calendar
                </a>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2 border-t border-border p-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                showOptions
                  ? 'Please select an option above…'
                  : 'Type your message…'
              }
              disabled={showOptions}
              className="flex-1 rounded-full border border-border bg-input px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing || showOptions}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher */}
      <div className="flex items-center gap-3">
        {!open && (
          <div className="rounded-2xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[0_8px_28px_rgba(0,0,0,0.4)]">
            May I help you?
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="animate-chat-pulse flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_34px_hsl(var(--primary)/0.55)] transition-transform hover:scale-105"
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </button>
      </div>
    </div>
  )
}
