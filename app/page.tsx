'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react'
import { slideVariants } from '@/lib/motion'

import { Slide01Hero } from '@/components/slides/Slide01Hero'
import { Slide02Problem } from '@/components/slides/Slide02Problem'
import { Slide03Validation } from '@/components/slides/Slide03Validation'
import { Slide04Model } from '@/components/slides/Slide04Model'
import { Slide05Graveyard } from '@/components/slides/Slide05Graveyard'
import { Slide06Solution } from '@/components/slides/Slide06Solution'
import { Slide07Product } from '@/components/slides/Slide07Product'
import { Slide08GTM } from '@/components/slides/Slide08GTM'
import { Slide09BusinessModel } from '@/components/slides/Slide09BusinessModel'
import { Slide10UnitEconomics } from '@/components/slides/Slide10UnitEconomics'
import { Slide11Competitive } from '@/components/slides/Slide11Competitive'
import { Slide12Team } from '@/components/slides/Slide12Team'
import { Slide13Ask } from '@/components/slides/Slide13Ask'

const slides = [
  Slide01Hero,
  Slide02Problem,
  Slide03Validation,
  Slide04Model,
  Slide05Graveyard,
  Slide06Solution,
  Slide07Product,
  Slide08GTM,
  Slide09BusinessModel,
  Slide10UnitEconomics,
  Slide11Competitive,
  Slide12Team,
  Slide13Ask,
]

const TOTAL = slides.length

export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showHelp, setShowHelp] = useState(false)

  const go = useCallback(
    (delta: number) => {
      const next = current + delta
      if (next < 0 || next >= TOTAL) return
      setDirection(delta)
      setCurrent(next)
    },
    [current]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [go])

  const SlideComponent = slides[current]

  return (
    <div className="w-screen h-screen bg-[#0d0b09] relative overflow-hidden select-none">
      {/* Slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Left nav */}
      <button
        onClick={() => go(-1)}
        disabled={current === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 flex items-center justify-center text-[#6b6050] hover:text-[#c9a037] disabled:opacity-20 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right nav */}
      <button
        onClick={() => go(1)}
        disabled={current === TOTAL - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-8 h-8 flex items-center justify-center text-[#6b6050] hover:text-[#c9a037] disabled:opacity-20 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-1.5 bg-[#c9a037]'
                : 'w-1.5 h-1.5 bg-[#2a2318] hover:bg-[#6b6050]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-5 right-6 z-50 flex items-center gap-2">
        <span className="text-[11px] tabular-nums text-[#6b6050]">
          {String(current + 1).padStart(2, '0')}{' '}
          <span className="text-[#2a2318]">/</span>{' '}
          {String(TOTAL).padStart(2, '0')}
        </span>

        {/* Help toggle */}
        <button
          onClick={() => setShowHelp((v) => !v)}
          className="text-[#2a2318] hover:text-[#6b6050] transition-colors"
          aria-label="Keyboard shortcuts"
        >
          <HelpCircle size={13} />
        </button>
      </div>

      {/* Help tooltip */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-12 right-6 z-50 border border-[#2a2318] bg-[#110f0c] rounded-sm p-3 text-[10px] text-[#8a7a62] space-y-1 min-w-[160px]"
          >
            <p><span className="text-[#e8dfc8]">→ / ↓</span>  Next slide</p>
            <p><span className="text-[#e8dfc8]">← / ↑</span>  Previous slide</p>
            <p><span className="text-[#e8dfc8]">Click dots</span>  Jump to slide</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
