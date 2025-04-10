"use client"

import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import Link from "next/link"

// Client component for the glitch effect
export function GlitchHeading({ text }: { text: string }) {
  return (
    <h1 className="text-3xl font-bold mb-4 glitch" data-text={text}>
      {text}
    </h1>
  )
}

// Client component for the back link
export function BackLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-primary hover:underline">
      <ArrowLeft size={16} /> {text}
    </Link>
  )
}

// Client component for the metadata display
export function PostMetadata({ date, readingTime }: { date: string; readingTime: string }) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <CalendarIcon size={14} />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock size={14} />
        <span>{readingTime}</span>
      </div>
    </div>
  )
}
