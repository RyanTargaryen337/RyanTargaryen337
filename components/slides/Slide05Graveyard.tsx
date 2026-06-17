'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const dead = [
  { name: 'BeMyDD', note: 'US designated-driver app, ~2010s. Failed to reach unit economics in suburban markets — driver dispatch cost exceeded rider willingness to pay.' },
  { name: 'Dryver', note: 'Still operating in select US cities, but stayed regional. Could not break out of franchise model.' },
  { name: 'STEER', note: 'App-based DD service. Quiet exit; could not solve insurance liability at scale.' },
  { name: 'Designated Driver Inc. → To Arrive Alive (Canada)', note: 'Acquired in 2022. Consolidation play; not a growth story.' },
]

export function Slide05Graveyard() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">V · The Graveyard</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-xl">
        Why a dozen Western attempts have stalled.
      </motion.h2>

      <div className="flex-1 space-y-0">
        {dead.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.3 + i * 0.1)}
            className="flex gap-5 border-b border-[#2a2318] py-5 last:border-b-0"
          >
            <span className="text-[#6b6050] text-lg mt-0.5 font-serif">†</span>
            <div>
              <p className="text-sm font-semibold text-[#e8dfc8] mb-1">{item.name}</p>
              <p className="text-xs text-[#8a7a62] leading-relaxed">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.75)} className="border border-[#2a2318] rounded-sm p-5 bg-[#110f0c] mt-6">
        <p className="text-xs text-[#8a7a62] leading-relaxed">
          <span className="text-[#e8dfc8] font-semibold">The pattern: </span>
          Three structural blockers in Western markets: (1) labor cost makes the human-driven-home model uneconomic vs Uber Black; (2) insurance liability for a non-owner driving an impaired customer&apos;s car is unsolved; (3) demand density never reaches the dispatch threshold. None of these apply with the same force in the African markets we target.
        </p>
      </motion.div>
    </div>
  )
}
