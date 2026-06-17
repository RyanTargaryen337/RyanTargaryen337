'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Car, Bike, Smartphone, MapPin } from 'lucide-react'

const steps = [
  {
    icon: Smartphone,
    step: '01',
    title: 'Book via app or venue QR',
    body: 'At the bar, the car park, or pre-booked from home. Booking is instant — no negotiation, no cash.',
  },
  {
    icon: Bike,
    step: '02',
    title: 'Driver arrives on e-bike',
    body: 'A vetted, named driver arrives on a foldable e-bike. You see their photo, rating, and live ETA before they arrive.',
  },
  {
    icon: Car,
    step: '03',
    title: 'They drive you home in your car',
    body: "Driver stows the e-bike in your boot. You ride home in your own vehicle. No fleet cost. No stranger's car.",
  },
  {
    icon: MapPin,
    step: '04',
    title: 'Morning retrieval — optional',
    body: 'Keys also offers morning-retrieval-only bookings. A second driver collects your car the next day. The workaround is dead.',
  },
]

export function Slide06Solution() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">VI · The Solution</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-3 max-w-2xl">
        How Keys works.
      </motion.h2>
      <motion.p {...fadeUp(0.28)} className="text-sm text-[#8a7a62] mb-10 max-w-lg">
        One booking. Your car gets home. You get home. No retrievals. No Bolt workaround. No strangers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={i}
              {...fadeUp(0.35 + i * 0.1)}
              className="border border-[#2a2318] rounded-sm p-6 bg-[#110f0c] flex gap-5 hover:border-[#c9a037]/30 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-sm border border-[#2a2318] flex items-center justify-center">
                  <Icon size={18} className="text-[#c9a037]" />
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050]">{s.step}</span>
                <h3 className="text-sm font-semibold text-[#e8dfc8] mt-1 mb-2">{s.title}</h3>
                <p className="text-xs text-[#8a7a62] leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div {...fadeUp(0.8)} className="mt-6 border border-[#c9a037]/20 rounded-sm p-4 bg-[#c9a037]/5">
        <p className="text-xs text-[#c9a037]">
          Keys is not a taxi. It is the first product in Africa purpose-built for the car owner who drinks responsibly but has no safe way to keep their car overnight.
        </p>
      </motion.div>
    </div>
  )
}
