'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Check, X } from 'lucide-react'

const cols = ['Keys', 'Bolt / Uber', 'Taxi', 'Two-Bolt Workaround']
const rows = [
  { feature: 'You keep your car', values: [true, false, false, true] },
  { feature: 'No morning retrieval needed', values: [true, false, false, false] },
  { feature: 'Vetted, named driver', values: [true, true, false, true] },
  { feature: 'Price-competitive with 2 rides', values: [true, true, false, false] },
  { feature: 'Works at 1am on demand', values: [true, true, true, true] },
  { feature: "No stranger's car", values: [true, false, false, true] },
  { feature: 'In-app payment', values: [true, true, false, false] },
]

export function Slide11Competitive() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">XI · Competitive Landscape</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-2xl">
        No direct competitor exists on the continent.
      </motion.h2>

      <motion.div {...fadeUp(0.35)} className="flex-1 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse">
          <thead>
            <tr className="border-b border-[#2a2318]">
              <th className="text-left text-[10px] tracking-[0.2em] uppercase text-[#6b6050] pb-4 pr-6 font-normal">Feature</th>
              {cols.map((c, i) => (
                <th
                  key={i}
                  className={`text-center text-[10px] tracking-[0.1em] uppercase pb-4 px-4 font-semibold ${
                    i === 0 ? 'text-[#c9a037]' : 'text-[#6b6050]'
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                className="border-b border-[#2a2318] last:border-b-0"
              >
                <td className="text-xs text-[#8a7a62] py-3 pr-6">{row.feature}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="text-center py-3 px-4">
                    {v ? (
                      <Check size={14} className={j === 0 ? 'text-[#c9a037] mx-auto' : 'text-[#4a7c59] mx-auto'} />
                    ) : (
                      <X size={14} className="text-[#6b6050] mx-auto" />
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div {...fadeUp(0.8)} className="mt-6 border border-[#c9a037]/20 p-4 bg-[#c9a037]/5 rounded-sm">
        <p className="text-xs text-[#c9a037]">
          The two-Bolt workaround is the de facto competitor — and it costs more, requires two bookings, and leaves you without your car overnight. Keys wins on every axis that matters to this customer.
        </p>
      </motion.div>
    </div>
  )
}
