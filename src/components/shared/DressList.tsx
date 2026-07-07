import { Shirt } from 'lucide-react'

export function DressList({ items, title }: { items: string[]; title: string }) {
  return (
    <div>
      <h4 className="mb-4 flex items-center gap-2 font-serif text-2xl text-purple-600">
        <Shirt className="h-5 w-5" /> {title}
      </h4>
      <ul className="space-y-3 text-black/60">
        {items.map((item) => (
          <li className="flex items-center gap-3" key={item}>
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" /> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
