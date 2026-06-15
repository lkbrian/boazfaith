import { Input } from '../ui/input'
import { Label } from '../ui/label'

export function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} placeholder={label} type={type} />
    </div>
  )
}
