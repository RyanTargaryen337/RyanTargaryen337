'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const insights = [
  {
    title: 'The retrieval problem is worse than the night ride',
    body: "Getting home is solved. Getting your car back at 9am from a venue 12 km away — with no breakfast, no ride, and a work call at 10 — is the part nobody talks about.",
  },
  {
    title: 'Trust blocks more decisions than price',
    body: "Handing a ₦15M SUV to an anonymous driver feels riskier than driving impaired. The barrier isn't cost awareness — it's identity verification at the moment of key handoff.",
  },
  {
    title: 'The decision happens at 1am in a car park',
    body: "Nobody plans to drink and drive. The decision is made when everyone else is leaving and there's no pre-booked alternative. Booking at 8pm (or a venue QR at the door) is the only intervention that works.",
  },
]

export function Slide03Validation() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">III · Validation</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        We&apos;ve lived this problem. Here&apos;s what we&apos;ve observed.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <motion.div {...fadeUp(0.35)} className="border border-[#2a2318] rounded-sm p-6 bg-[#110f0c] md:col-span-1">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#c9a037] mb-4">Day-1 Customer</p>
          <h3 className="font-serif text-xl font-bold text-[#e8dfc8] mb-3">30–45 entrepreneur, Lagos</h3>
          <div className="space-y-3 text-xs text-[#8a7a62]">
            <p>Owns a vehicle worth ₦8M–25M. Active in Victoria Island and Lekki nightlife 2–4 nights per month. Has tried the two-Bolt workaround. Trusts a vetted, named driver — not an anonymous platform stranger — to handle their keys.</p>
            <div className="border-t border-[#2a2318] pt-3">
              <p className="text-[#c9a037]">
                Owns the car. Cares about it. Has social capital to refer 3+ people after a single good experience. Present at the exact venues and hours where demand concentrates.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.45)} className="md:col-span-2 space-y-0">
          {insights.map((ins, i) => (
            <div key={i} className="border-b border-[#2a2318] py-5 last:border-b-0">
              <p className="text-sm font-semibold text-[#e8dfc8] mb-1">{ins.title}</p>
              <p className="text-xs text-[#8a7a62] leading-relaxed">{ins.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.6)} className="border border-[#2a2318] mt-6 p-3">
        <p className="text-xs italic text-[#6b6050]">
          [ Customer validation quotes — in progress. Target: 10 conversations by end of June 2026. ]
        </p>
      </motion.div>
    </div>
  )
}
