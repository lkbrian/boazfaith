import { useEffect, useState } from 'react'

import {
  FETCH_CONTENT,
  FETCH_GALLERY,
  FETCH_MESSAGES,
  GET_EVENT_DETAILS,
  type EventDetails,
  type GuestMessage,
} from '../services/wedding'

type Content = Awaited<ReturnType<typeof FETCH_CONTENT>>

export function useWeddingData() {
  const [content, setContent] = useState<Content | null>(null)
  const [gallery, setGallery] = useState<string[]>([])
  const [messages, setMessages] = useState<GuestMessage[]>([])
  const [details, setDetails] = useState<{ ceremony: EventDetails; reception: EventDetails } | null>(null)

  useEffect(() => {
    let active = true

    async function loadMockData() {
      const [contentData, galleryData, messageData, eventData] = await Promise.all([
        FETCH_CONTENT(),
        FETCH_GALLERY(),
        FETCH_MESSAGES(),
        GET_EVENT_DETAILS(),
      ])

      if (!active) return
      setContent(contentData)
      setGallery(galleryData)
      setMessages(messageData)
      setDetails(eventData)
    }

    loadMockData()

    return () => {
      active = false
    }
  }, [])

  return { content, gallery, messages, details }
}
