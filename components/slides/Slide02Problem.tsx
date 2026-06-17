'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export function Slide02Problem() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">II · The Problem</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.2)}
        className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl"
      >
        Africa is the worst place in the world to drink and drive.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div {...fadeUp(0.35)} className="border border-[#2a2318] rounded-sm p-6 bg-[#110f0c]">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-4">South Africa</p>
          <div className="mb-5">
            <span className="font-serif text-5xl md:text-6xl font-bold text-[#c9a037]">58%</span>
            <p className="text-xs text-[#8a7a62] mt-2 max-w-[200px]">
              of road deaths involve alcohol — nearly 3× the global average of 20%
            </p>
          </div>
          <div>
            <span className="font-serif text-4xl md:text-5xl font-bold text-[#c9a037]">R18.2B</span>
            <p className="text-xs text-[#8a7a62] mt-2">annual economic cost of alcohol-related crashes</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="border border-[#2a2318] rounded-sm p-6 bg-[#110f0c]">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-4">Nigeria</p>
          <div>
            <span className="font-serif text-5xl md:text-6xl font-bold text-[#c9a037]">21.4</span>
            <p className="text-xs text-[#8a7a62] mt-2 max-w-[240px]">
              road deaths per 100,000 people — among Africa&apos;s worst, weak DUI enforcement,
              no scalable alternative
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.55)} className="border border-[#2a2318] rounded-sm p-5 bg-[#110f0c] mb-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-3">What People Do Instead</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-sm text-[#e8dfc8]">
              Two separate Bolt rides — one home, one back to retrieve the car in the morning.
            </p>
            <p className="text-xs text-[#c9a037] mt-1">
              Keys is price-competitive with the workaround, and removes the morning retrieval entirely.
            </p>
          </div>
          <span className="font-serif text-2xl font-bold text-[#e05252] whitespace-nowrap">
            ₦16,000–30,000
          </span>
        </div>
      </motion.div>

      <motion.ul {...fadeUp(0.65)} className="space-y-2 mb-8">
        {[
          "The morning car retrieval is worse than the night ride — it's the more painful, underserved half of the problem.",
          "People drive impaired because they don't trust an unknown Bolt driver with their keys — it's an identity trust problem, not a laziness problem.",
          'Nobody plans to drink and drive. The decision happens in the car park at 1am when everyone else is leaving.',
        ].map((item, i) => (
          <li key={i} className="flex gap-2 text-xs text-[#8a7a62]">
            <span className="text-[#c9a037] mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </motion.ul>

      <motion.blockquote {...fadeUp(0.75)} className="border-l-2 border-[#2a2318] pl-4">
        <p className="text-xs italic text-[#6b6050]">
          And yet — no scaled, app-based designated-driver category exists anywhere on the continent.
        </p>
      </motion.blockquote>
    </div>
  )
}
