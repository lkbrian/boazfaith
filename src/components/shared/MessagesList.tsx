import { ChevronLeft, ChevronRight, MessageCircleHeart } from 'lucide-react'
import { useEffect, useState } from 'react'

import { FETCH_CONTACT_MESSAGES, type ContactMessage } from '../../services/contact'
import { Button } from '../ui/button'

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

    async function loadMessages() {
      if (!active) return
      setLoading(true)

      try {
        const { messages: data, count: total } = await FETCH_CONTACT_MESSAGES(page, PAGE_SIZE)
        if (!active) return
        setMessages(data)
        setCount(total)
      } catch (currentError) {
        if (active) setError(currentError instanceof Error ? currentError.message : 'Unable to load messages.')
      } finally {
        if (active) setLoading(false)
      }
    }

    void loadMessages()

    return () => {
      active = false
    }
  }, [page])

  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE))

  return (
    <div className="space-y-6">


      {loading && <p className="py-10 text-center text-sm text-slate-500">Loading messages…</p>}

      {!loading && error && <p className="py-10 text-center text-sm text-red-600">{error}</p>}

      {!loading && !error && messages.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <MessageCircleHeart className="h-8 w-8 text-purple-600/60" />
          <p className="text-slate-500">No messages yet — be the first to send your wishes.</p>
        </div>
      )}

      {!loading && !error && messages.length > 0 && (
        <>
          <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
            {messages.map((entry) => (
              <article
                className="mb-6 break-inside-avoid-column rounded-sm bg-white p-2 "
                key={`${entry.email_address}-${entry.created_at}`}
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px;"
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-serif text-xl text-purple-600 font-bold">{entry.full_name}</p>
                    <p className="text-sm text-slate-500">{entry.email_address}</p>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{formatDate(entry.created_at)}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">"{entry.message}"</p>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-4">
              <Button
                aria-label="Previous page"
                disabled={page === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                size="icon-sm"
                variant="outline"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <p className="text-xs text-slate-500">
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
        </>
      )}
    </div>
  )
}
