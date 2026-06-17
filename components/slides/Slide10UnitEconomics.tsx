'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const driverRows = [
  { label: 'Avg. earnings per shift (4 rides × ₦9,000)', value: '₦36,000' },
  { label: 'E-bike amortisation', value: '−₦2,500' },
  { label: 'Platform fee', value: '−₦9,000' },
  { label: 'Net driver take-home per shift', value: '₦24,500', highlight: true },
  { label: 'Shifts per month (part-time, 12)', value: '₦294,000 / mo', highlight: true },
]

const platformRows = [
  { label: 'Revenue per ride', value: '₦2,640' },
  { label: 'Support & insurance allocation', value: '−₦400' },
  { label: 'Payment processing (Stripe 1.5%)', value: '−₦180' },
  { label: 'Contribution per ride', value: '₦2,060', highlight: true },
  { label: 'Break-even (fixed costs ₦1.2M/mo)', value: '~583 rides/mo', highlight: true },
]

export function Slide10UnitEconomics() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">X · Unit Economics</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        The numbers work without subsidy.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <motion.div {...fadeUp(0.35)}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-4">Driver Economics</p>
          <div className="space-y-0">
            {driverRows.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-3 border-b border-[#2a2318] last:border-b-0 ${row.highlight ? 'border-t border-[#c9a037]/20 mt-1 pt-4' : ''}`}
              >
                <span className="text-xs text-[#8a7a62]">{row.label}</span>
                <span className={`text-sm font-semibold ${row.highlight ? 'text-[#c9a037]' : 'text-[#e8dfc8]'}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.45)}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-4">Platform Economics</p>
          <div className="space-y-0">
            {platformRows.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-3 border-b border-[#2a2318] last:border-b-0 ${row.highlight ? 'border-t border-[#c9a037]/20 mt-1 pt-4' : ''}`}
              >
                <span className="text-xs text-[#8a7a62]">{row.label}</span>
                <span className={`text-sm font-semibold ${row.highlight ? 'text-[#c9a037]' : 'text-[#e8dfc8]'}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.65)} className="mt-6 border border-[#2a2318] p-4 bg-[#110f0c] rounded-sm">
        <p className="text-xs text-[#8a7a62]">
          <span className="text-[#e8dfc8] font-semibold">Key assumption: </span>
          Driver supply from existing Bolt driver pool (part-time opt-in). No dedicated fleet. No driver salary. Capital-light from day one.
        </p>
      </motion.div>
    </div>
  )
}
