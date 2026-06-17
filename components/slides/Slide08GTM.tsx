'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const phases = [
  {
    phase: 'Phase 1',
    timeline: 'Q3–Q4 2026',
    city: 'Lagos — Victoria Island / Lekki',
    actions: [
      '5 partner venues (high-end bars, restaurants)',
      '30 vetted drivers onboarded',
      'Venue QR + social referral loop',
      'Target: 200 rides / month by month 3',
    ],
    highlight: true,
  },
  {
    phase: 'Phase 2',
    timeline: 'Q1–Q2 2027',
    city: 'Expand Lagos + Enter Abuja',
    actions: [
      'Open corporate accounts (event companies)',
      'Integrate with Bolt Business API',
      '150 drivers across two cities',
    ],
    highlight: false,
  },
  {
    phase: 'Phase 3',
    timeline: 'H2 2027',
    city: 'Nairobi + Johannesburg',
    actions: [
      'White-label for Bolt in-app DD category',
      'Franchise operator model in SA',
      'Target 2,000+ rides / month combined',
    ],
    highlight: false,
  },
]

export function Slide08GTM() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">VIII · Go-to-Market</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-3 max-w-2xl">
        Venue-first. City by city. Trust compounds.
      </motion.h2>
      <motion.p {...fadeUp(0.28)} className="text-sm text-[#8a7a62] mb-10 max-w-xl">
        We start where demand concentrates — Lagos nightlife — and expand only when unit economics are proven.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {phases.map((p, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.35 + i * 0.12)}
            className={`rounded-sm p-6 flex flex-col gap-4 border ${
              p.highlight ? 'border-[#c9a037]/40 bg-[#c9a037]/5' : 'border-[#2a2318] bg-[#110f0c]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${p.highlight ? 'text-[#c9a037]' : 'text-[#6b6050]'}`}>
                  {p.phase}
                </span>
                <span className="text-[10px] text-[#6b6050]">{p.timeline}</span>
              </div>
              <p className="text-sm font-semibold text-[#e8dfc8]">{p.city}</p>
            </div>
            <ul className="space-y-2 flex-1">
              {p.actions.map((a, j) => (
                <li key={j} className="flex gap-2 text-xs text-[#8a7a62]">
                  <span className={`mt-0.5 ${p.highlight ? 'text-[#c9a037]' : 'text-[#6b6050]'}`}>→</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.72)} className="mt-6 grid grid-cols-3 gap-4">
        {[
          { label: 'Beachhead TAM', value: 'Lagos nightlife car owners', sub: '~120,000 qualifying trips/mo' },
          { label: 'Channel 1', value: 'Venue QR + word of mouth', sub: 'Zero paid acquisition in Phase 1' },
          { label: 'Channel 2', value: 'Bolt in-app placement', sub: 'Bolt-adjacent trust transfer' },
        ].map((item, i) => (
          <div key={i} className="border border-[#2a2318] rounded-sm p-4">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-1">{item.label}</p>
            <p className="text-xs font-semibold text-[#e8dfc8] mb-0.5">{item.value}</p>
            <p className="text-[10px] text-[#6b6050]">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
