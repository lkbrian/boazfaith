import { supabase } from '../lib/supabase'

export type ContactMessagePayload = {
  name: string
  email: string
  phone?: string
  message: string
}

export type ContactMessage = {
  full_name: string
  email_address: string
  phone_number: string | null
  message: string
  created_at: string
}

export const SUBMIT_CONTACT_MESSAGE = async (payload: ContactMessagePayload) => {
  const { data, error } = await supabase.functions.invoke('boaz_contact_upsert', {
    body: {
      full_name: payload.name,
      email_address: payload.email,
      phone_number: payload.phone || null,
      message: payload.message,
    },
  })

  if (error) {
    const context = 'context' in error ? (error as { context?: Response }).context : undefined
    const body = await context?.json().catch(() => null)
    throw new Error(body?.error ?? error.message)
  }

  if (data?.error) throw new Error(data.error)
}

export const FETCH_CONTACT_MESSAGES = async (
  page = 0,
  pageSize = 10,
): Promise<{ messages: ContactMessage[]; count: number }> => {
  const from = page * pageSize
  const to = from + pageSize - 1

  const { data, error, count } = await supabase
    .from('boaz_contact')
    .select('full_name, email_address, phone_number, message, created_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) throw new Error(error.message)
  return { messages: data ?? [], count: count ?? 0 }
}
