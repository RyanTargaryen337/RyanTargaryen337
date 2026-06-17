'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Spotlight } from '@/components/ui/spotlight'

const uses = [
  { label: 'Driver onboarding & vetting (30 drivers)', pct: '35%', value: '~$17,500' },
  { label: 'App MVP (React Native, 4 months)', pct: '30%', value: '~$15,000' },
  { label: 'Venue partnerships & BD (5 venues)', pct: '15%', value: '~$7,500' },
  { label: 'Insurance pilot + legal', pct: '12%', value: '~$6,000' },
  { label: 'Working capital & contingency', pct: '8%', value: '~$4,000' },
]

const asks = [
  { type: 'Partnership', detail: 'Bolt Africa integration — in-app DD category placement and driver pool access.' },
  { type: 'Seed Capital', detail: '$50,000 pre-seed to prove Lagos unit economics and reach 600 rides/month.' },
  { type: 'Warm Introductions', detail: 'Bolt Nigeria GM · Insurance underwriters (Stanbic, AXA Mansard) · Series A mobility VCs.' },
]

export function Slide13Ask() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-hidden">
      <Spotlight className="-top-40 right-0 md:right-20 md:-top-20" fill="#c9a037" />

      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8 z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">XIII · The Ask</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-3 max-w-xl z-10">
        Here is what we need from Bolt.
      </motion.h2>
      <motion.p {...fadeUp(0.28)} className="text-sm text-[#8a7a62] mb-10 max-w-lg z-10">
        We are not asking Bolt to build this. We are asking Bolt to let us build it inside the ecosystem they already own.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 z-10">
        <motion.div {...fadeUp(0.35)} className="space-y-4">
          {asks.map((a, i) => (
            <div key={i} className="flex gap-4 border-b border-[#2a2318] pb-4 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 border border-[#c9a037]/40 rounded-sm flex items-center justify-center">
                  <span className="text-[#c9a037] text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#e8dfc8] mb-1">{a.type}</p>
                <p className="text-xs text-[#8a7a62] leading-relaxed">{a.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.45)}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-4">Use of $50K Seed</p>
          <div className="space-y-3">
            {uses.map((u, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] text-[#8a7a62]">{u.label}</span>
                  <span className="text-[10px] text-[#c9a037] font-semibold">{u.value}</span>
                </div>
                <div className="h-1 bg-[#1a1710] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: u.pct }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                    className="h-full bg-[#c9a037] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.8)} className="mt-6 border border-[#c9a037]/30 rounded-sm p-5 bg-[#c9a037]/5 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#e8dfc8]">Precious-Ryan Ndubuisi</p>
            <p className="text-xs text-[#8a7a62]">precious@keysafrica.io · +234 — — —</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm border border-[#c9a037]/40 bg-[#c9a037]/10 flex items-center justify-center">
              <span className="text-[#c9a037] font-serif font-bold text-lg">K</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#c9a037]">KEYS</p>
              <p className="text-[10px] text-[#6b6050]">Africa&apos;s designated driver network</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
