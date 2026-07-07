export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-sans text-sm  tracking-[5px] font-semibold uppercase text-purple-600">{eyebrow}</p>
      <h2 className="font-serif text-5xl font-medium text-black sm:text-6xl">{title}</h2>
    </div>
  )
}
