import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, MessageCircleHeart } from 'lucide-react'

import { FETCH_CONTACT_MESSAGES, type ContactMessage } from '../../services/contact'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const PAGE_SIZE = 10

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

export function MessagesList() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    setLoading(true)

    FETCH_CONTACT_MESSAGES(page, PAGE_SIZE)
      .then(({ messages: data, count: total }) => {
        if (!active) return
        setMessages(data)
        setCount(total)
      })
      .catch((currentError) => {
        if (active) setError(currentError instanceof Error ? currentError.message : 'Unable to load messages.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [page])

  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages Of Love</CardTitle>
        <CardDescription>Blessings and well wishes shared by family and friends for the big day.</CardDescription>
      </CardHeader>
      <CardContent>
        {loading && <p className="py-10 text-center text-sm text-black/50">Loading messages…</p>}

        {!loading && error && <p className="py-10 text-center text-sm text-red-600">{error}</p>}

        {!loading && !error && messages.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <MessageCircleHeart className="h-8 w-8 text-purple-600/60" />
            <p className="text-black/60">No messages yet — be the first to send your wishes.</p>
          </div>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="grid gap-4">
            <div className="divide-y divide-black/10 rounded-lg border border-black/10">
              {messages.map((entry) => (
                <div className="grid gap-1.5 p-4" key={`${entry.email_address}-${entry.created_at}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-serif text-lg text-purple-700">{entry.full_name}</p>
                      <p className="text-xs text-black/40">{entry.email_address}</p>
                    </div>
                    <p className="text-xs uppercase tracking-wide text-black/40">{formatDate(entry.created_at)}</p>
                  </div>
                  <p className="text-sm leading-6 text-black/70">{entry.message}</p>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3">
                <Button
                  aria-label="Previous page"
                  disabled={page === 0}
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  size="icon-sm"
                  variant="outline"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <p className="text-xs text-black/50">
                  Page {page + 1} of {totalPages}
                </p>
                <Button
                  aria-label="Next page"
                  disabled={page + 1 >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  size="icon-sm"
                  variant="outline"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
