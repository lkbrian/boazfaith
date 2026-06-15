import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-[#F8F5EF]/12 bg-black/20 px-3 py-2 text-base text-[#F8F5EF] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#F8F5EF] placeholder:text-[#B9B4AA]/65 focus-visible:border-[#DDB665] focus-visible:ring-3 focus-visible:ring-[#DDB665]/25 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-black/30 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
