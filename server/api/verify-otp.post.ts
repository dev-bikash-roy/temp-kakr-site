import { defineEventHandler, readBody, createError } from 'h3'

// Shared OTP store — must import the same Map reference used in send-otp.post.ts.
// Nitro bundles each file separately so we use a global singleton via globalThis.
declare global {
  // eslint-disable-next-line no-var
  var __otpStore: Map<string, { code: string; expiresAt: number }> | undefined
}

// Reuse or create the singleton store
if (!globalThis.__otpStore) {
  globalThis.__otpStore = new Map()
}
const otpStore = globalThis.__otpStore

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, otp } = body

  if (!email || !otp) {
    throw createError({ statusCode: 400, statusMessage: 'Email and OTP are required.' })
  }

  const record = otpStore.get(email)

  if (!record) {
    throw createError({ statusCode: 400, statusMessage: 'No OTP found for this email. Please request a new one.' })
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(email)
    throw createError({ statusCode: 400, statusMessage: 'OTP has expired. Please request a new one.' })
  }

  if (record.code !== String(otp).trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Incorrect OTP. Please check your email and try again.' })
  }

  // OTP is valid — remove it so it cannot be reused
  otpStore.delete(email)

  return { success: true, message: 'OTP verified successfully.' }
})
