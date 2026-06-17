'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const stats = [
  { label: 'Launched', value: 'July 2015' },
  { label: 'Operator', value: 'Didi Daijia (Didi Chuxing)', highlight: true },
  { label: 'Cities', value: '~200 in China', highlight: true },
  { label: 'Consolidation', value: 'Didi acq. E-Daijia (Aug 2022)' },
  { label: 'Global CAGR', value: '5%+ (2023–2030)', highlight: true },
]

export function Slide04Model() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">IV · The Validated Model</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        This isn&apos;t a thesis. China has been running it for a decade.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 items-start">
        <motion.div {...fadeUp(0.35)}>
          <div className="mb-6">
            <span className="font-serif text-7xl md:text-8xl text-[#2a2318] leading-none select-none">代驾</span>
          </div>
          <p className="text-sm text-[#e8dfc8] mb-2">
            <strong>Daijia — Designated driving on demand.</strong> A driver arrives at your location on a foldable e-bike, stows it in your trunk, and drives you home in your own car. You pay through the app.
          </p>
          <div className="border border-[#2a2318] rounded-sm p-4 mt-6 bg-[#110f0c]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#c9a037] mb-2">Why It Works</p>
            <p className="text-xs text-[#8a7a62] leading-relaxed">
              Zero fleet cost. The user keeps their car. The driver pool is decoupled from vehicle ownership. Unit economics survive in markets where labor is cheap relative to private vehicle cost.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="space-y-0">
          {stats.map((row, i) => (
            <div key={i} className="flex justify-between items-center border-b border-[#2a2318] py-4 last:border-b-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050]">{row.label}</span>
              <span className={`text-sm font-semibold ${row.highlight ? 'text-[#c9a037]' : 'text-[#e8dfc8]'}`}>
                {row.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
