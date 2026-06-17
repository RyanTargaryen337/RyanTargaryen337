'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { ShieldCheck, Star, Clock, QrCode } from 'lucide-react'

const features = [
  { icon: ShieldCheck, label: 'Identity-verified drivers', note: 'Photo ID, background check, vehicle handling test before first ride.' },
  { icon: Star, label: 'Named & rated driver pool', note: "See who's coming before they arrive. Trust is built before key handoff." },
  { icon: Clock, label: 'Pre-book or on-demand', note: 'Book at 8pm before drinks, or scan a venue QR at 1am. Both flows convert.' },
  { icon: QrCode, label: 'Venue QR integration', note: 'Partner venues display QR codes at the exit. The decision point becomes the booking point.' },
]

export function Slide07Product() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">VII · Product</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        Built around the moment of decision.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <motion.div {...fadeUp(0.35)} className="md:col-span-1 flex flex-col gap-4">
          <div className="border border-[#2a2318] rounded-2xl bg-[#110f0c] flex-1 flex flex-col items-center justify-center p-8 gap-6 min-h-[260px]">
            <div className="w-full max-w-[160px]">
              <div className="bg-[#1a1710] rounded-xl p-4 border border-[#2a2318]">
                <div className="w-8 h-8 rounded-full bg-[#c9a037]/20 border border-[#c9a037]/40 flex items-center justify-center mb-3">
                  <span className="text-[#c9a037] text-xs font-bold">K</span>
                </div>
                <div className="h-2 bg-[#2a2318] rounded-full w-3/4 mb-2" />
                <div className="h-2 bg-[#2a2318] rounded-full w-1/2 mb-4" />
                <div className="bg-[#c9a037] rounded-lg py-2 text-center">
                  <span className="text-[#0d0b09] text-[10px] font-bold tracking-wider">BOOK NOW</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-[#6b6050] text-center tracking-wide uppercase">App — Coming Q3 2026</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="md:col-span-2 space-y-0">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="flex gap-4 border-b border-[#2a2318] py-5 last:border-b-0">
                <div className="flex-shrink-0 w-8 h-8 border border-[#2a2318] rounded-sm flex items-center justify-center mt-0.5">
                  <Icon size={14} className="text-[#c9a037]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#e8dfc8] mb-1">{f.label}</p>
                  <p className="text-xs text-[#8a7a62] leading-relaxed">{f.note}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.75)} className="mt-6 border border-[#2a2318] p-4 flex flex-col md:flex-row md:items-center gap-3">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] whitespace-nowrap">Tech Stack</span>
        <div className="flex flex-wrap gap-2">
          {['React Native', 'Node.js', 'Bolt Driver API', 'Stripe', 'Firebase'].map((t) => (
            <span key={t} className="text-[10px] border border-[#2a2318] px-2 py-1 text-[#8a7a62] rounded-sm">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
