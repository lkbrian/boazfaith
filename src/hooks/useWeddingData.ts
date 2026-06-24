import { useEffect, useState } from 'react'

import {
  FETCH_CONTENT,
  FETCH_GALLERY,
  GET_EVENT_DETAILS,
  type EventDetails,
  type GalleryImage,
} from '../services/wedding'

type Content = Awaited<ReturnType<typeof FETCH_CONTENT>>

export function useWeddingData() {
  const [content, setContent] = useState<Content | null>(null)
  const [gallery, setGallery] = useState<GalleryImage[]>([])
  const [details, setDetails] = useState<{ ceremony: EventDetails; reception: EventDetails } | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const [contentData, galleryData, eventData] = await Promise.all([
          FETCH_CONTENT(),
          FETCH_GALLERY(),
          GET_EVENT_DETAILS(),
        ])

        if (!active) return
        setContent(contentData)
        setGallery(galleryData)
        setDetails(eventData)
      } catch (currentError) {
        if (!active) return
        setError(currentError instanceof Error ? currentError.message : 'Unable to load wedding data.')
      }
    }

    load()

    return () => {
      active = false
    }
  }, [])

  return { content, gallery, details, error }
}
