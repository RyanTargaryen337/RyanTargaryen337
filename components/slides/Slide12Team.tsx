'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { ExternalLink } from 'lucide-react'

const team = [
  {
    name: 'Precious-Ryan Ndubuisi',
    role: 'Founder & CEO',
    bio: 'Independent Web3 & Fintech BD Consultant. Has advised 7 African fintech and mobility startups on go-to-market across Nigeria, Kenya, and South Africa. Lived the designated-driver problem in Lagos for 4 years.',
    tags: ['BD & Partnerships', 'West Africa GTM', 'Fintech Rails'],
    open: false,
  },
  {
    name: 'CTO — Recruiting',
    role: 'Head of Engineering',
    bio: 'Looking for a senior mobile engineer with experience in marketplace or logistics platforms. React Native + Node.js. Lagos-based or Lagos-willing preferred.',
    tags: ['React Native', 'Marketplace', 'Logistics APIs'],
    open: true,
  },
  {
    name: 'Ops Lead — Recruiting',
    role: 'Head of Driver Operations',
    bio: 'Looking for someone with ride-hailing or last-mile logistics operations experience in Lagos. Has managed a driver pool of 50+ and understands the Bolt driver ecosystem.',
    tags: ['Driver Ops', 'Lagos Logistics', 'Bolt Ecosystem'],
    open: true,
  },
]

const advisors = [
  { name: '[Bolt Nigeria contact]', note: 'Strategic partnership — pending warm intro confirmation' },
  { name: '[Ex-Didi BD]', note: 'China model playbook — target outreach Q3 2026' },
]

export function Slide12Team() {
  return (
    <div className="relative w-full h-full bg-[#0d0b09] flex flex-col p-10 md:p-16 overflow-auto">
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a037]">XII · Team</span>
        <div className="flex-1 h-px bg-[#2a2318]" />
      </motion.div>

      <motion.h2 {...fadeUp(0.2)} className="font-serif text-3xl md:text-5xl font-bold text-[#e8dfc8] leading-tight mb-10 max-w-xl">
        Building the right team, honestly.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {team.map((member, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.3 + i * 0.1)}
            className={`border rounded-sm p-6 flex flex-col gap-3 ${
              member.open ? 'border-dashed border-[#2a2318] bg-transparent' : 'border-[#2a2318] bg-[#110f0c]'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-sm font-semibold ${member.open ? 'text-[#6b6050]' : 'text-[#e8dfc8]'}`}>
                  {member.name}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#c9a037] mt-0.5">{member.role}</p>
              </div>
              {!member.open && <ExternalLink size={14} className="text-[#6b6050] mt-1" />}
              {member.open && (
                <span className="text-[9px] border border-[#2a2318] px-2 py-0.5 text-[#6b6050] rounded-full">
                  Open role
                </span>
              )}
            </div>
            <p className="text-xs text-[#8a7a62] leading-relaxed flex-1">{member.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {member.tags.map((t) => (
                <span key={t} className="text-[9px] border border-[#2a2318] px-2 py-0.5 text-[#6b6050] rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.65)} className="mt-5 border border-[#2a2318] rounded-sm p-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#6b6050] mb-3">Advisor Pipeline</p>
        <div className="flex flex-col md:flex-row gap-4">
          {advisors.map((a, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="text-[#6b6050] text-sm mt-0.5">·</span>
              <div>
                <p className="text-xs text-[#e8dfc8]">{a.name}</p>
                <p className="text-[10px] text-[#6b6050]">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
