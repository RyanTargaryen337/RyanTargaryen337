'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const streams = [
  {
    label: 'Per-ride commission',
    pct: '20–25%',
    desc: 'Keys takes a platform fee on each booking. Driver keeps 75–80%. Transparent from day one.',
    primary: true,
  },
  {
    label: 'Morning retrieval add-on',
    pct: '+₦3,500',
    desc: 'Standalone next-day car-retrieval service. Higher margin — no driver competition, pure scheduling.',
    primary: false,
  },
  {
    label: 'Venue partner subscriptions',
    pct: '₦50K / mo',
    desc: 'Premium venue placement, branded QR stands, analytics dashboard for repeat booking rates.',
    primary: false,
  },
  {
    label: 'Corporate & event accounts',
    pct: 'Custom',
    desc: 'Bulk rides pre-purchased by event companies, corporate offsites. Volume discount, monthly invoice.',
    primary: false,
  },
]

export function Slide09BusinessModel() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">IX · Business Model</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        Simple take-rate. Multiple expansion levers.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {streams.map((s, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.3 + i * 0.1)}
            className={`border rounded-sm p-6 ${s.primary ? 'border-[#c9a037]/40 bg-[#c9a037]/5' : 'border-[#2a2318] bg-[#110f0c]'}`}
          >
            <div className="flex items-start justify-between mb-3">
              <p className={`text-[10px] tracking-[0.2em] uppercase ${s.primary ? 'text-[#c9a037]' : 'text-[#6b6050]'}`}>
                {s.label}
              </p>
              <span className={`font-serif text-2xl font-bold ${s.primary ? 'text-[#c9a037]' : 'text-[#e8dfc8]'}`}>
                {s.pct}
              </span>
            </div>
            <p className="text-xs text-[#8a7a62] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.75)} className="mt-6 border border-[#2a2318] rounded-sm p-5 bg-[#110f0c]">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-3">Illustrative P&amp;L at 500 Rides / Month</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Avg. fare', value: '₦12,000' },
            { label: 'Platform revenue (22%)', value: '₦2,640/ride' },
            { label: 'Monthly GMV', value: '₦6,000,000' },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[10px] text-[#6b6050] mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-[#c9a037]">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
