import { defineEventHandler, readBody, createError } from 'h3'

declare global {
  // eslint-disable-next-line no-var
  var __otpStore: Map<string, { code: string; expiresAt: number }> | undefined
}

// Shared singleton OTP store across all server routes
if (!globalThis.__otpStore) {
  globalThis.__otpStore = new Map()
}
const otpStore = globalThis.__otpStore

const BREVO_API_KEY = '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'
const SENDER_EMAIL = 'contact@kakr.ai'
const SENDER_NAME = 'KAKR.ai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'A valid email is required.' })
  }

  // Rate-limit: don't allow re-send if code is still fresh (< 50 seconds old)
  const existing = otpStore.get(email)
  if (existing && existing.expiresAt - Date.now() > 10_000) {
    throw createError({ statusCode: 429, statusMessage: 'OTP already sent. Please wait before requesting a new one.' })
  }

  // Generate a 6-digit OTP
  const code = String(Math.floor(100000 + Math.random() * 900000))
  const expiresAt = Date.now() + 5 * 60 * 1000 // 5 minutes



  // Send email via Brevo Transactional API
  const brevoPayload = {
    sender: { name: SENDER_NAME, email: SENDER_EMAIL },
    to: [{ email }],
    subject: `${code} – Your KAKR.ai Pricing Access Code`,
    htmlContent: `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin:0;padding:0;background:#05070f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070f;padding:40px 20px;">
          <tr><td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#090b14;border-radius:16px;border:1px solid rgba(99,102,241,0.3);overflow:hidden;">
              <!-- Top accent line -->
              <tr><td style="height:3px;background:linear-gradient(90deg,transparent,#6366f1,#a855f7,transparent);"></td></tr>
              <!-- Header -->
              <tr><td style="padding:36px 40px 24px;text-align:center;">
                <div style="display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);border-radius:14px;margin-bottom:20px;">
                  <span style="font-size:24px;">🔓</span>
                </div>
                <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0 0 8px;">Your Pricing Access Code</h1>
                <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0;">Enter the code below to unlock PTERI pricing.</p>
              </td></tr>
              <!-- OTP Box -->
              <tr><td style="padding:0 40px 32px;text-align:center;">
                <div style="display:inline-block;background:rgba(99,102,241,0.08);border:2px dashed rgba(99,102,241,0.4);border-radius:12px;padding:20px 48px;margin-bottom:24px;">
                  <span style="color:#818cf8;font-size:42px;font-weight:800;letter-spacing:12px;font-family:'Courier New',monospace;">${code}</span>
                </div>
                <p style="color:rgba(255,255,255,0.4);font-size:13px;margin:0;">This code expires in <strong style="color:rgba(255,255,255,0.6);">5 minutes</strong>.</p>
              </td></tr>
              <!-- Divider -->
              <tr><td style="padding:0 40px;"><div style="border-top:1px solid rgba(255,255,255,0.05);"></div></td></tr>
              <!-- Footer -->
              <tr><td style="padding:24px 40px;text-align:center;">
                <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0 0 4px;">If you did not request this, you can safely ignore this email.</p>
                <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:0;">© ${new Date().getFullYear()} KAKR.ai · Kakr Labs</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY
    },
    body: JSON.stringify(brevoPayload)
  })

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}))
    console.error('[send-otp] Brevo error:', errData)
    throw createError({ 
      statusCode: 502, 
      statusMessage: `Brevo Error: ${errData.message || 'Unknown error'}. Check if sender ${SENDER_EMAIL} is verified and your IP is whitelisted.` 
    })
  }

  // Only store the OTP if the email was successfully sent
  otpStore.set(email, { code, expiresAt })

  console.log(`[send-otp] SUCCESS: OTP sent to ${email}`)

  return { success: true, message: 'OTP sent to your email.' }
})
