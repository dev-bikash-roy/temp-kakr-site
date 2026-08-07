import { defineEventHandler, readBody, createError, getRequestHeader } from 'h3'

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const body = await readBody(event)
  const { token } = body

  if (!token) {
    throw createError({ statusCode: 400, statusMessage: 'reCAPTCHA token is required.' })
  }

  // Verify on the real domain and the temporary Vercel domain used for testing.
  const host = getRequestHeader(event, 'host') || ''
  const shouldVerifyCaptcha = host.includes('kakr.ai') || host.includes('temporary-kakr.vercel.app')
  if (!shouldVerifyCaptcha) {
    console.log(`[verify-recaptcha] Skipping verification on local/non-public host: ${host}`)
    return { success: true }
  }

  const RECAPTCHA_SECRET = '6Lf5fNQsAAAAADn_jLQDXHsm5l7HbngCWBKqNJCj'

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${RECAPTCHA_SECRET}&response=${token}`
  })

  const data = await response.json()

  if (!data.success) {
    throw createError({ statusCode: 400, statusMessage: 'reCAPTCHA verification failed. Please try again.' })
  }

  return { success: true }
})
