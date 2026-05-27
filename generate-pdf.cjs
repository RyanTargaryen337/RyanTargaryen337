const { Document, Page, Text, View, StyleSheet, renderToBuffer, Font } = require('@react-pdf/renderer')
const fs = require('fs')
const path = require('path')
const React = require('react')

// ─── Design tokens ──────────────────────────────────────────────────────────
const C = {
  bg:      '#0d0b09',
  surface: '#110f0c',
  border:  '#2a2318',
  gold:    '#c9a037',
  text:    '#e8dfc8',
  muted:   '#8a7a62',
  dim:     '#6b6050',
  danger:  '#e05252',
  green:   '#4a7c59',
}

const S = StyleSheet.create({
  page:        { backgroundColor: C.bg, padding: 40, fontFamily: 'Helvetica', flexDirection: 'column' },
  label:       { fontSize: 7, letterSpacing: 2, textTransform: 'uppercase', color: C.gold, marginBottom: 14 },
  labelRow:    { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  labelLine:   { flex: 1, height: 0.5, backgroundColor: C.border, marginLeft: 10 },
  h1:          { fontSize: 72, color: C.text, fontFamily: 'Helvetica-Bold', lineHeight: 1, marginBottom: 6 },
  h2:          { fontSize: 26, color: C.text, fontFamily: 'Helvetica-Bold', lineHeight: 1.2, marginBottom: 12, maxWidth: 380 },
  h3:          { fontSize: 13, color: C.text, fontFamily: 'Helvetica-Bold', marginBottom: 4 },
  body:        { fontSize: 9, color: C.muted, lineHeight: 1.6 },
  small:       { fontSize: 7.5, color: C.dim },
  gold:        { color: C.gold },
  danger:      { color: C.danger },
  bold:        { fontFamily: 'Helvetica-Bold' },
  card:        { borderWidth: 0.5, borderColor: C.border, backgroundColor: C.surface, padding: 16, marginBottom: 10, borderRadius: 2 },
  cardGold:    { borderWidth: 0.5, borderColor: '#c9a03766', backgroundColor: '#c9a0370d', padding: 16, marginBottom: 10, borderRadius: 2 },
  row:         { flexDirection: 'row', gap: 10 },
  col:         { flex: 1 },
  divider:     { height: 0.5, backgroundColor: C.border, marginVertical: 8 },
  statBig:     { fontSize: 36, fontFamily: 'Helvetica-Bold', color: C.gold, marginBottom: 2 },
  bullet:      { flexDirection: 'row', gap: 6, marginBottom: 4 },
  arrow:       { fontSize: 8, color: C.gold, marginTop: 1 },
  tag:         { borderWidth: 0.5, borderColor: C.border, paddingHorizontal: 5, paddingVertical: 2, marginRight: 4, marginBottom: 4, borderRadius: 1 },
  tagText:     { fontSize: 6.5, color: C.dim },
  tableHeader: { flexDirection: 'row', borderBottomWidth: 0.5, borderColor: C.border, paddingBottom: 6, marginBottom: 2 },
  tableRow:    { flexDirection: 'row', borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 5 },
  check:       { fontSize: 8, color: C.green, textAlign: 'center' },
  cross:       { fontSize: 8, color: C.dim, textAlign: 'center' },
  goldCheck:   { fontSize: 8, color: C.gold, textAlign: 'center' },
  footer:      { position: 'absolute', bottom: 20, right: 40, flexDirection: 'row', alignItems: 'center', gap: 8 },
  footerNum:   { fontSize: 8, color: C.dim },
  confBar:     { fontSize: 6.5, letterSpacing: 1.5, textTransform: 'uppercase', color: C.dim, marginBottom: 24 },
  barTrack:    { height: 3, backgroundColor: '#1a1710', borderRadius: 2, marginTop: 2, marginBottom: 6 },
  goldLine:    { height: 1.5, backgroundColor: C.gold, marginTop: 6, marginBottom: 16, width: 32 },
  dagger:      { fontSize: 11, color: C.dim, fontFamily: 'Helvetica', marginRight: 10, marginTop: 1 },
  quoteBar:    { width: 1.5, backgroundColor: C.border, marginRight: 8 },
  chinese:     { fontSize: 52, color: C.border, fontFamily: 'Helvetica-Bold', marginBottom: 12 },
})

// ─── Reusable pieces ─────────────────────────────────────────────────────────
const SectionLabel = ({ text }) => React.createElement(View, { style: S.labelRow },
  React.createElement(Text, { style: S.label }, text),
  React.createElement(View, { style: S.labelLine })
)

const Footer = ({ n }) => React.createElement(View, { style: S.footer },
  React.createElement(Text, { style: S.footerNum }, `${String(n).padStart(2,'0')} / 13`)
)

const Bullet = ({ text }) => React.createElement(View, { style: S.bullet },
  React.createElement(Text, { style: S.arrow }, '→'),
  React.createElement(Text, { style: S.body }, text)
)

// ─── Slides ──────────────────────────────────────────────────────────────────

const Slide01 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(Text, { style: S.confBar }, 'Strictly Confidential · For Bolt Review Only · V1.0 · Q2 2026'),
  React.createElement(Text, { style: S.h1 }, 'KEYS'),
  React.createElement(View, { style: S.goldLine }),
  React.createElement(Text, { style: { fontSize: 16, color: C.text, fontFamily: 'Helvetica', marginBottom: 6 } }, "Africa's designated driver network."),
  React.createElement(Text, { style: { ...S.body, maxWidth: 340 } },
    'A category infrastructure play for Bolt — built on the validated billion-dollar model from China, adapted for the markets where it actually works.'
  ),
  React.createElement(View, { style: { position: 'absolute', bottom: 40, right: 40, alignItems: 'flex-end' } },
    React.createElement(Text, { style: { fontSize: 9, color: C.text, fontFamily: 'Helvetica-Bold' } }, 'Precious-Ryan Ndubuisi'),
    React.createElement(Text, { style: S.small }, 'Independent Web3 & Fintech BD Consultant')
  ),
  React.createElement(Footer, { n: 1 })
)

const Slide02 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'II · The Problem' }),
  React.createElement(Text, { style: S.h2 }, 'Africa is the worst place in the world to drink and drive.'),
  React.createElement(View, { style: S.row },
    React.createElement(View, { style: { ...S.card, flex: 1 } },
      React.createElement(Text, { style: S.small }, 'SOUTH AFRICA'),
      React.createElement(Text, { style: S.statBig }, '58%'),
      React.createElement(Text, { style: { ...S.body, marginBottom: 10 } }, 'of road deaths involve alcohol — nearly 3× the global average of 20%'),
      React.createElement(Text, { style: { ...S.statBig, fontSize: 28 } }, 'R18.2B'),
      React.createElement(Text, { style: S.body }, 'annual economic cost of alcohol-related crashes')
    ),
    React.createElement(View, { style: { ...S.card, flex: 1 } },
      React.createElement(Text, { style: S.small }, 'NIGERIA'),
      React.createElement(Text, { style: S.statBig }, '21.4'),
      React.createElement(Text, { style: S.body }, 'road deaths per 100,000 people — among Africa\'s worst, weak DUI enforcement, no scalable alternative')
    )
  ),
  React.createElement(View, { style: S.card },
    React.createElement(Text, { style: { ...S.small, marginBottom: 6 } }, 'WHAT PEOPLE DO INSTEAD'),
    React.createElement(View, { style: { ...S.row, alignItems: 'center', justifyContent: 'space-between' } },
      React.createElement(View, { style: { flex: 1 } },
        React.createElement(Text, { style: S.body }, 'Two separate Bolt rides — one home, one back to retrieve the car in the morning.'),
        React.createElement(Text, { style: { ...S.body, ...S.gold, marginTop: 3 } }, 'Keys is price-competitive with the workaround, and removes the morning retrieval entirely.')
      ),
      React.createElement(Text, { style: { fontSize: 18, color: C.danger, fontFamily: 'Helvetica-Bold', marginLeft: 20 } }, '₦16,000–30,000')
    )
  ),
  ...[
    "The morning car retrieval is worse than the night ride — it's the more painful, underserved half of the problem.",
    "People drive impaired because they don't trust an unknown Bolt driver with their keys — it's an identity trust problem, not a laziness problem.",
    'Nobody plans to drink and drive. The decision happens in the car park at 1am when everyone else is leaving.',
  ].map((t, i) => React.createElement(Bullet, { key: i, text: t })),
  React.createElement(Footer, { n: 2 })
)

const Slide03 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'III · Validation' }),
  React.createElement(Text, { style: S.h2 }, "We've lived this problem. Here's what we've observed."),
  React.createElement(View, { style: S.row },
    React.createElement(View, { style: { ...S.card, flex: 1 } },
      React.createElement(Text, { style: { ...S.small, ...S.gold, marginBottom: 6 } }, 'DAY-1 CUSTOMER'),
      React.createElement(Text, { style: S.h3 }, '30–45 entrepreneur, Lagos'),
      React.createElement(Text, { style: S.body }, 'Owns a vehicle worth ₦8M–25M. Active in Victoria Island and Lekki nightlife 2–4 nights per month. Has tried the two-Bolt workaround.'),
      React.createElement(View, { style: S.divider }),
      React.createElement(Text, { style: { ...S.body, ...S.gold } }, 'Owns the car. Cares about it. Has social capital to refer 3+ people after a single good experience.')
    ),
    React.createElement(View, { style: { flex: 2 } },
      ...[
        { title: 'The retrieval problem is worse than the night ride', body: "Getting home is solved. Getting your car back at 9am from a venue 12 km away — with no breakfast, no ride, and a work call at 10 — is the part nobody talks about." },
        { title: 'Trust blocks more decisions than price', body: "Handing a ₦15M SUV to an anonymous driver feels riskier than driving impaired. The barrier isn't cost awareness — it's identity verification at the moment of key handoff." },
        { title: 'The decision happens at 1am in a car park', body: "Nobody plans to drink and drive. The decision is made when everyone else is leaving and there's no pre-booked alternative. Booking at 8pm is the only intervention that works." },
      ].map((ins, i) => React.createElement(View, { key: i, style: { borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 10 } },
        React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 3 } }, ins.title),
        React.createElement(Text, { style: S.body }, ins.body)
      ))
    )
  ),
  React.createElement(View, { style: { borderWidth: 0.5, borderColor: C.border, padding: 8, marginTop: 8 } },
    React.createElement(Text, { style: { ...S.body, fontStyle: 'italic' } }, '[ Customer validation quotes — in progress. Target: 10 conversations by end of June 2026. ]')
  ),
  React.createElement(Footer, { n: 3 })
)

const Slide04 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'IV · The Validated Model' }),
  React.createElement(Text, { style: S.h2 }, "This isn't a thesis. China has been running it for a decade."),
  React.createElement(View, { style: S.row },
    React.createElement(View, { style: { flex: 1 } },
      React.createElement(Text, { style: S.chinese }, '代驾'),
      React.createElement(Text, { style: S.body },
        'Daijia — Designated driving on demand. A driver arrives at your location on a foldable e-bike, stows it in your trunk, and drives you home in your own car. You pay through the app.'
      ),
      React.createElement(View, { style: { ...S.card, marginTop: 12 } },
        React.createElement(Text, { style: { ...S.small, ...S.gold, marginBottom: 6 } }, 'WHY IT WORKS'),
        React.createElement(Text, { style: S.body }, 'Zero fleet cost. The user keeps their car. The driver pool is decoupled from vehicle ownership. Unit economics survive in markets where labor is cheap relative to private vehicle cost.')
      )
    ),
    React.createElement(View, { style: { flex: 1, marginLeft: 20 } },
      ...[
        { label: 'LAUNCHED',        value: 'July 2015',                    hl: false },
        { label: 'OPERATOR',        value: 'Didi Daijia (Didi Chuxing)',   hl: true  },
        { label: 'CITIES',          value: '~200 in China',                hl: true  },
        { label: 'CONSOLIDATION',   value: 'Didi acq. E-Daijia (Aug 2022)', hl: false },
        { label: 'GLOBAL CAGR',     value: '5%+ (2023–2030)',              hl: true  },
      ].map((r, i) => React.createElement(View, { key: i, style: { ...S.tableRow, justifyContent: 'space-between' } },
        React.createElement(Text, { style: S.small }, r.label),
        React.createElement(Text, { style: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: r.hl ? C.gold : C.text } }, r.value)
      ))
    )
  ),
  React.createElement(Footer, { n: 4 })
)

const Slide05 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'V · The Graveyard' }),
  React.createElement(Text, { style: S.h2 }, 'Why a dozen Western attempts have stalled.'),
  ...[
    { name: 'BeMyDD',                                          note: 'US designated-driver app, ~2010s. Failed to reach unit economics in suburban markets — driver dispatch cost exceeded rider willingness to pay.' },
    { name: 'Dryver',                                          note: 'Still operating in select US cities, but stayed regional. Could not break out of franchise model.' },
    { name: 'STEER',                                           note: 'App-based DD service. Quiet exit; could not solve insurance liability at scale.' },
    { name: 'Designated Driver Inc. → To Arrive Alive (CA)', note: 'Acquired in 2022. Consolidation play; not a growth story.' },
  ].map((d, i) => React.createElement(View, { key: i, style: { flexDirection: 'row', borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 10 } },
    React.createElement(Text, { style: S.dagger }, '†'),
    React.createElement(View, { style: { flex: 1 } },
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 2 } }, d.name),
      React.createElement(Text, { style: S.body }, d.note)
    )
  )),
  React.createElement(View, { style: { ...S.card, marginTop: 16 } },
    React.createElement(Text, { style: S.body },
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text } }, 'The pattern: '),
      'Three structural blockers in Western markets: (1) labor cost makes the model uneconomic vs Uber Black; (2) insurance liability for a non-owner driving an impaired customer\'s car is unsolved; (3) demand density never reaches the dispatch threshold. None of these apply with the same force in the African markets we target.'
    )
  ),
  React.createElement(Footer, { n: 5 })
)

const Slide06 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'VI · The Solution' }),
  React.createElement(Text, { style: S.h2 }, 'How Keys works.'),
  React.createElement(Text, { style: { ...S.body, marginBottom: 16 } }, 'One booking. Your car gets home. You get home. No retrievals. No Bolt workaround. No strangers.'),
  React.createElement(View, { style: S.row },
    ...[
      { step: '01', title: 'Book via app or venue QR',          body: 'At the bar, the car park, or pre-booked from home. Booking is instant — no negotiation, no cash.' },
      { step: '02', title: 'Driver arrives on e-bike',           body: 'A vetted, named driver arrives on a foldable e-bike. You see their photo, rating, and live ETA before they arrive.' },
      { step: '03', title: 'They drive you home in your car',    body: "Driver stows the e-bike in your boot. You ride home in your own vehicle. No fleet cost. No stranger's car." },
      { step: '04', title: 'Morning retrieval — optional',       body: 'Keys also offers morning-retrieval-only bookings. A second driver collects your car the next day.' },
    ].map((s, i) => React.createElement(View, { key: i, style: { ...S.card, flex: 1 } },
      React.createElement(Text, { style: { ...S.small, ...S.gold, marginBottom: 6 } }, s.step),
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 4 } }, s.title),
      React.createElement(Text, { style: S.body }, s.body)
    ))
  ),
  React.createElement(View, { style: S.cardGold },
    React.createElement(Text, { style: { ...S.body, ...S.gold } }, 'Keys is not a taxi. It is the first product in Africa purpose-built for the car owner who drinks responsibly but has no safe way to keep their car overnight.')
  ),
  React.createElement(Footer, { n: 6 })
)

const Slide07 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'VII · Product' }),
  React.createElement(Text, { style: S.h2 }, 'Built around the moment of decision.'),
  ...[
    { icon: '✓', label: 'Identity-verified drivers',  note: 'Photo ID, background check, vehicle handling test before first ride.' },
    { icon: '★', label: 'Named & rated driver pool',   note: "See who's coming before they arrive. Trust is built before key handoff." },
    { icon: '◷', label: 'Pre-book or on-demand',       note: 'Book at 8pm before drinks, or scan a venue QR at 1am. Both flows convert.' },
    { icon: '⊞', label: 'Venue QR integration',        note: 'Partner venues display QR codes at the exit. The decision point becomes the booking point.' },
  ].map((f, i) => React.createElement(View, { key: i, style: { flexDirection: 'row', borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 10, gap: 12 } },
    React.createElement(Text, { style: { fontSize: 10, color: C.gold, width: 16 } }, f.icon),
    React.createElement(View, { style: { flex: 1 } },
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 2 } }, f.label),
      React.createElement(Text, { style: S.body }, f.note)
    )
  )),
  React.createElement(View, { style: { ...S.card, marginTop: 16, flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' } },
    React.createElement(Text, { style: S.small }, 'TECH STACK  '),
    ...['React Native', 'Node.js', 'Bolt Driver API', 'Stripe', 'Firebase'].map((t, i) =>
      React.createElement(View, { key: i, style: S.tag },
        React.createElement(Text, { style: S.tagText }, t)
      )
    )
  ),
  React.createElement(Footer, { n: 7 })
)

const Slide08 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'VIII · Go-to-Market' }),
  React.createElement(Text, { style: S.h2 }, 'Venue-first. City by city. Trust compounds.'),
  React.createElement(Text, { style: { ...S.body, marginBottom: 16 } }, 'We start where demand concentrates — Lagos nightlife — and expand only when unit economics are proven.'),
  React.createElement(View, { style: S.row },
    ...[
      { phase: 'Phase 1', timeline: 'Q3–Q4 2026', city: 'Lagos — Victoria Island / Lekki', actions: ['5 partner venues (high-end bars, restaurants)', '30 vetted drivers onboarded', 'Venue QR + social referral loop', 'Target: 200 rides / month by month 3'], hl: true },
      { phase: 'Phase 2', timeline: 'Q1–Q2 2027', city: 'Expand Lagos + Enter Abuja',       actions: ['Open corporate accounts (event companies)', 'Integrate with Bolt Business API', '150 drivers across two cities'],            hl: false },
      { phase: 'Phase 3', timeline: 'H2 2027',    city: 'Nairobi + Johannesburg',           actions: ['White-label for Bolt in-app DD category', 'Franchise operator model in SA', 'Target 2,000+ rides / month combined'],       hl: false },
    ].map((p, i) => React.createElement(View, { key: i, style: { ...(p.hl ? S.cardGold : S.card), flex: 1 } },
      React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 } },
        React.createElement(Text, { style: { ...S.small, color: p.hl ? C.gold : C.dim } }, p.phase),
        React.createElement(Text, { style: S.small }, p.timeline)
      ),
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 8 } }, p.city),
      ...p.actions.map((a, j) => React.createElement(Bullet, { key: j, text: a }))
    ))
  ),
  React.createElement(View, { style: { ...S.row, marginTop: 12 } },
    ...[ { label: 'Beachhead TAM', value: 'Lagos nightlife car owners', sub: '~120,000 qualifying trips/mo' },
         { label: 'Channel 1',     value: 'Venue QR + word of mouth',   sub: 'Zero paid acquisition in Phase 1' },
         { label: 'Channel 2',     value: 'Bolt in-app placement',      sub: 'Bolt-adjacent trust transfer' } ]
    .map((item, i) => React.createElement(View, { key: i, style: { ...S.card, flex: 1 } },
      React.createElement(Text, { style: { ...S.small, marginBottom: 4 } }, item.label),
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text } }, item.value),
      React.createElement(Text, { style: S.small }, item.sub)
    ))
  ),
  React.createElement(Footer, { n: 8 })
)

const Slide09 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'IX · Business Model' }),
  React.createElement(Text, { style: S.h2 }, 'Simple take-rate. Multiple expansion levers.'),
  React.createElement(View, { style: S.row },
    ...[
      { label: 'Per-ride commission',         pct: '20–25%',   desc: 'Keys takes a platform fee on each booking. Driver keeps 75–80%. Transparent from day one.',                                                             primary: true  },
      { label: 'Morning retrieval add-on',    pct: '+₦3,500',  desc: 'Standalone next-day car-retrieval service. Higher margin — no driver competition, pure scheduling.',                                                    primary: false },
      { label: 'Venue partner subscriptions', pct: '₦50K/mo',  desc: 'Premium venue placement, branded QR stands, analytics dashboard for repeat booking rates.',                                                             primary: false },
      { label: 'Corporate & event accounts',  pct: 'Custom',   desc: 'Bulk rides pre-purchased by event companies, corporate offsites. Volume discount, monthly invoice.',                                                    primary: false },
    ].map((s, i) => React.createElement(View, { key: i, style: { ...(s.primary ? S.cardGold : S.card), flex: 1 } },
      React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 } },
        React.createElement(Text, { style: { ...S.small, color: s.primary ? C.gold : C.dim } }, s.label),
        React.createElement(Text, { style: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: s.primary ? C.gold : C.text } }, s.pct)
      ),
      React.createElement(Text, { style: S.body }, s.desc)
    ))
  ),
  React.createElement(View, { style: { ...S.card, marginTop: 12 } },
    React.createElement(Text, { style: { ...S.small, marginBottom: 10 } }, 'ILLUSTRATIVE P&L AT 500 RIDES / MONTH'),
    React.createElement(View, { style: S.row },
      ...[ { label: 'Avg. fare', value: '₦12,000' }, { label: 'Platform revenue (22%)', value: '₦2,640/ride' }, { label: 'Monthly GMV', value: '₦6,000,000' } ]
      .map((item, i) => React.createElement(View, { key: i, style: { flex: 1 } },
        React.createElement(Text, { style: S.small }, item.label),
        React.createElement(Text, { style: { ...S.body, ...S.bold, ...S.gold } }, item.value)
      ))
    )
  ),
  React.createElement(Footer, { n: 9 })
)

const Slide10 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'X · Unit Economics' }),
  React.createElement(Text, { style: S.h2 }, 'The numbers work without subsidy.'),
  React.createElement(View, { style: S.row },
    React.createElement(View, { style: { flex: 1 } },
      React.createElement(Text, { style: { ...S.small, marginBottom: 10 } }, 'DRIVER ECONOMICS'),
      ...[
        { label: 'Avg. earnings per shift (4 rides × ₦9,000)', value: '₦36,000',      hl: false },
        { label: 'E-bike amortisation',                          value: '−₦2,500',     hl: false },
        { label: 'Platform fee',                                 value: '−₦9,000',     hl: false },
        { label: 'Net driver take-home per shift',               value: '₦24,500',     hl: true  },
        { label: 'Shifts per month (part-time, 12)',             value: '₦294,000/mo', hl: true  },
      ].map((r, i) => React.createElement(View, { key: i, style: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 5 } },
        React.createElement(Text, { style: S.body }, r.label),
        React.createElement(Text, { style: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: r.hl ? C.gold : C.text } }, r.value)
      ))
    ),
    React.createElement(View, { style: { flex: 1, marginLeft: 20 } },
      React.createElement(Text, { style: { ...S.small, marginBottom: 10 } }, 'PLATFORM ECONOMICS'),
      ...[
        { label: 'Revenue per ride',                   value: '₦2,640',      hl: false },
        { label: 'Support & insurance allocation',     value: '−₦400',       hl: false },
        { label: 'Payment processing (Stripe 1.5%)',   value: '−₦180',       hl: false },
        { label: 'Contribution per ride',              value: '₦2,060',      hl: true  },
        { label: 'Break-even (fixed costs ₦1.2M/mo)', value: '~583 rides/mo', hl: true },
      ].map((r, i) => React.createElement(View, { key: i, style: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 5 } },
        React.createElement(Text, { style: S.body }, r.label),
        React.createElement(Text, { style: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: r.hl ? C.gold : C.text } }, r.value)
      ))
    )
  ),
  React.createElement(View, { style: { ...S.card, marginTop: 16 } },
    React.createElement(Text, { style: S.body },
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text } }, 'Key assumption: '),
      'Driver supply from existing Bolt driver pool (part-time opt-in). No dedicated fleet. No driver salary. Capital-light from day one.'
    )
  ),
  React.createElement(Footer, { n: 10 })
)

const Slide11 = () => {
  const cols = ['Keys', 'Bolt/Uber', 'Taxi', 'Two-Bolt WA']
  const rows = [
    { feature: 'You keep your car',            values: [true,  false, false, true ] },
    { feature: 'No morning retrieval needed',  values: [true,  false, false, false] },
    { feature: 'Vetted, named driver',         values: [true,  true,  false, true ] },
    { feature: 'Price-competitive with 2 rides', values: [true, true, false, false] },
    { feature: 'Works at 1am on demand',       values: [true,  true,  true,  true ] },
    { feature: "No stranger's car",            values: [true,  false, false, true ] },
    { feature: 'In-app payment',               values: [true,  true,  false, false] },
  ]
  const colW = 60
  return React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
    React.createElement(SectionLabel, { text: 'XI · Competitive Landscape' }),
    React.createElement(Text, { style: S.h2 }, 'No direct competitor exists on the continent.'),
    React.createElement(View, { style: { ...S.tableHeader, marginBottom: 6 } },
      React.createElement(Text, { style: { ...S.small, flex: 1 } }, 'FEATURE'),
      ...cols.map((c, i) => React.createElement(Text, { key: i, style: { ...S.small, color: i === 0 ? C.gold : C.dim, width: colW, textAlign: 'center' } }, c))
    ),
    ...rows.map((r, i) => React.createElement(View, { key: i, style: { ...S.tableRow } },
      React.createElement(Text, { style: { ...S.body, flex: 1 } }, r.feature),
      ...r.values.map((v, j) => React.createElement(Text, { key: j, style: { ...(v ? (j === 0 ? S.goldCheck : S.check) : S.cross), width: colW } }, v ? '✓' : '✗'))
    )),
    React.createElement(View, { style: { ...S.cardGold, marginTop: 16 } },
      React.createElement(Text, { style: { ...S.body, ...S.gold } }, "The two-Bolt workaround is the de facto competitor — and it costs more, requires two bookings, and leaves you without your car overnight. Keys wins on every axis that matters to this customer.")
    ),
    React.createElement(Footer, { n: 11 })
  )
}

const Slide12 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'XII · Team' }),
  React.createElement(Text, { style: S.h2 }, 'Building the right team, honestly.'),
  React.createElement(View, { style: S.row },
    ...[
      { name: 'Precious-Ryan Ndubuisi', role: 'Founder & CEO',          bio: 'Independent Web3 & Fintech BD Consultant. Has advised 7 African fintech and mobility startups on go-to-market across Nigeria, Kenya, and South Africa. Lived the designated-driver problem in Lagos for 4 years.',                              tags: ['BD & Partnerships', 'West Africa GTM', 'Fintech Rails'],  open: false },
      { name: 'CTO — Recruiting',       role: 'Head of Engineering',     bio: 'Looking for a senior mobile engineer with experience in marketplace or logistics platforms. React Native + Node.js. Lagos-based or Lagos-willing preferred.',                                                                                     tags: ['React Native', 'Marketplace', 'Logistics APIs'],           open: true  },
      { name: 'Ops Lead — Recruiting',  role: 'Head of Driver Ops',      bio: 'Looking for someone with ride-hailing or last-mile logistics operations experience in Lagos. Has managed a driver pool of 50+ and understands the Bolt driver ecosystem.',                                                                         tags: ['Driver Ops', 'Lagos Logistics', 'Bolt Ecosystem'],         open: true  },
    ].map((m, i) => React.createElement(View, { key: i, style: { ...S.card, flex: 1, borderStyle: m.open ? 'dashed' : 'solid' } },
      React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 } },
        React.createElement(View, null,
          React.createElement(Text, { style: { ...S.body, ...S.bold, color: m.open ? C.dim : C.text } }, m.name),
          React.createElement(Text, { style: { ...S.small, ...S.gold } }, m.role)
        ),
        m.open ? React.createElement(Text, { style: { ...S.tagText, borderWidth: 0.5, borderColor: C.border, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 8 } }, 'Open role') : null
      ),
      React.createElement(Text, { style: { ...S.body, marginBottom: 8 } }, m.bio),
      React.createElement(View, { style: { flexDirection: 'row', flexWrap: 'wrap' } },
        ...m.tags.map((t, j) => React.createElement(View, { key: j, style: S.tag }, React.createElement(Text, { style: S.tagText }, t)))
      )
    ))
  ),
  React.createElement(View, { style: { ...S.card, marginTop: 12 } },
    React.createElement(Text, { style: { ...S.small, marginBottom: 8 } }, 'ADVISOR PIPELINE'),
    React.createElement(View, { style: S.row },
      ...[ { name: '[Bolt Nigeria contact]', note: 'Strategic partnership — pending warm intro confirmation' },
           { name: '[Ex-Didi BD]',           note: 'China model playbook — target outreach Q3 2026' } ]
      .map((a, i) => React.createElement(View, { key: i, style: { flex: 1 } },
        React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text } }, a.name),
        React.createElement(Text, { style: S.small }, a.note)
      ))
    )
  ),
  React.createElement(Footer, { n: 12 })
)

const Slide13 = () => React.createElement(Page, { size: 'A4', orientation: 'landscape', style: S.page },
  React.createElement(SectionLabel, { text: 'XIII · The Ask' }),
  React.createElement(Text, { style: S.h2 }, 'Here is what we need from Bolt.'),
  React.createElement(Text, { style: { ...S.body, marginBottom: 16 } }, "We are not asking Bolt to build this. We are asking Bolt to let us build it inside the ecosystem they already own."),
  React.createElement(View, { style: S.row },
    React.createElement(View, { style: { flex: 1 } },
      ...[
        { type: 'Partnership',       detail: 'Bolt Africa integration — in-app DD category placement and driver pool access.' },
        { type: 'Seed Capital',      detail: '$50,000 pre-seed to prove Lagos unit economics and reach 600 rides/month.' },
        { type: 'Warm Introductions', detail: 'Bolt Nigeria GM · Insurance underwriters (Stanbic, AXA Mansard) · Series A mobility VCs.' },
      ].map((a, i) => React.createElement(View, { key: i, style: { flexDirection: 'row', gap: 10, borderBottomWidth: 0.5, borderColor: C.border, paddingVertical: 10 } },
        React.createElement(View, { style: { width: 24, height: 24, borderWidth: 0.5, borderColor: '#c9a03766', alignItems: 'center', justifyContent: 'center' } },
          React.createElement(Text, { style: { ...S.small, ...S.gold } }, String(i + 1).padStart(2, '0'))
        ),
        React.createElement(View, { style: { flex: 1 } },
          React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text, marginBottom: 2 } }, a.type),
          React.createElement(Text, { style: S.body }, a.detail)
        )
      ))
    ),
    React.createElement(View, { style: { flex: 1, marginLeft: 20 } },
      React.createElement(Text, { style: { ...S.small, marginBottom: 12 } }, 'USE OF $50K SEED'),
      ...[
        { label: 'Driver onboarding & vetting', pct: 0.35, value: '~$17,500' },
        { label: 'App MVP (React Native)',       pct: 0.30, value: '~$15,000' },
        { label: 'Venue partnerships & BD',      pct: 0.15, value: '~$7,500'  },
        { label: 'Insurance pilot + legal',      pct: 0.12, value: '~$6,000'  },
        { label: 'Working capital',              pct: 0.08, value: '~$4,000'  },
      ].map((u, i) => React.createElement(View, { key: i, style: { marginBottom: 6 } },
        React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 } },
          React.createElement(Text, { style: S.small }, u.label),
          React.createElement(Text, { style: { ...S.small, ...S.gold } }, u.value)
        ),
        React.createElement(View, { style: S.barTrack },
          React.createElement(View, { style: { height: 3, width: `${u.pct * 100}%`, backgroundColor: C.gold, borderRadius: 2 } })
        )
      ))
    )
  ),
  React.createElement(View, { style: { ...S.cardGold, marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
    React.createElement(View, null,
      React.createElement(Text, { style: { ...S.body, ...S.bold, color: C.text } }, 'Precious-Ryan Ndubuisi'),
      React.createElement(Text, { style: S.small }, 'precious@keysafrica.io')
    ),
    React.createElement(View, { style: { alignItems: 'flex-end' } },
      React.createElement(Text, { style: { fontSize: 11, fontFamily: 'Helvetica-Bold', ...S.gold } }, 'KEYS'),
      React.createElement(Text, { style: S.small }, "Africa's designated driver network")
    )
  ),
  React.createElement(Footer, { n: 13 })
)

// ─── Assemble & render ───────────────────────────────────────────────────────
const PitchDeck = () => React.createElement(Document, { title: 'KEYS — Pitch Deck — Q2 2026', author: 'Precious-Ryan Ndubuisi' },
  React.createElement(Slide01),
  React.createElement(Slide02),
  React.createElement(Slide03),
  React.createElement(Slide04),
  React.createElement(Slide05),
  React.createElement(Slide06),
  React.createElement(Slide07),
  React.createElement(Slide08),
  React.createElement(Slide09),
  React.createElement(Slide10),
  React.createElement(Slide11),
  React.createElement(Slide12),
  React.createElement(Slide13)
)

async function main() {
  console.log('Generating KEYS pitch deck PDF...')
  const buffer = await renderToBuffer(React.createElement(PitchDeck))
  const outPath = path.join(__dirname, 'KEYS-Pitch-Deck-Q2-2026.pdf')
  fs.writeFileSync(outPath, buffer)
  console.log(`✓ Saved: ${outPath}`)
}

main().catch(err => { console.error(err); process.exit(1) })
