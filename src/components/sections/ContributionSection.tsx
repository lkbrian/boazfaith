import { useState } from 'react'
import { Check, Copy, Gift } from 'lucide-react'

import { Reveal } from '../shared/Reveal'

const PAYBILL = '247247'
const ACCOUNT = '0721495089'

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-purple-400/20 bg-white/5 px-5 py-4 text-left">
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-200/70">{label}</p>
        <p className="mt-1 font-serif text-2xl text-white sm:text-3xl">{value}</p>
      </div>
      <button
        aria-label={`Copy ${label}`}
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-purple-400/30 text-purple-200 transition hover:border-white hover:text-white"
        onClick={handleCopy}
        type="button"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export function ContributionSection() {
  return (
    <section className="bg-purple-950 px-5 py-24 lg:px-8" id="contribution">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-purple-600/20 text-purple-200 shadow-[0_0_24px_rgba(153,0,255,0.45)]">
          <Gift className="h-6 w-6" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[5px] text-purple-300">Contribution</p>
        <h2 className="mt-2 font-serif text-5xl font-medium text-white sm:text-6xl">Bless Our Journey</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
          Your presence is the greatest gift of all. If you'd still like to bless us as we begin this new chapter, you're welcome to contribute via M-Pesa.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <CopyField label="Paybill" value={PAYBILL} />
          <CopyField label="Account" value={ACCOUNT} />
        </div>
      </Reveal>
    </section>
  )
}
