'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Spotlight } from '@/components/ui/spotlight'

export function Slide01Hero() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] overflow-hidden flex flex-col justify-between p-10 md:p-16">
      <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#c9a037" />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[10px] tracking-[0.25em] uppercase text-[#6b6050] z-10"
      >
        Strictly Confidential · For Bolt Review Only · V1.0 · Q2 2026
      </motion.p>

      <div className="z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
        >
          <h1 className="font-serif text-[clamp(5rem,18vw,14rem)] font-bold leading-none tracking-[-0.02em] text-[#e8dfc8]">
            KEYS
          </h1>
          <div className="w-16 h-[2px] bg-[#c9a037] mt-4 mb-6" />
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="max-w-xl">
          <p className="text-xl md:text-2xl font-light text-[#e8dfc8] mb-3">
            Africa&apos;s designated driver network.
          </p>
          <p className="text-sm md:text-base text-[#8a7a62] leading-relaxed">
            A category infrastructure play for Bolt — built on the validated billion-dollar model
            from China, adapted for the markets where it actually works.
          </p>
        </motion.div>
      </div>

      <motion.div {...fadeUp(1.0)} className="z-10 self-end text-right">
        <p className="text-sm font-semibold text-[#e8dfc8]">Precious-Ryan Ndubuisi</p>
        <p className="text-xs text-[#6b6050]">Independent Web3 &amp; Fintech BD Consultant</p>
      </motion.div>
    </div>
  )
}
