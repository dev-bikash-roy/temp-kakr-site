import { defineEventHandler, readBody, createError } from 'h3'

console.log('Loading /api/contact handler...')

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        // Format the contact form data for email — mirrors the pattern used
        // in /api/pilot-request, since this endpoint was previously forwarding
        // the raw client body (field names like "firstname"/"0-2/name" that
        // don't mean anything to the email service) instead of a proper
        // human-readable payload.
        const emailData = {
            to: 'contact@kakr.ai',
            subject: `New Contact Form Submission: ${body.firstname || ''} ${body.lastname || ''}`.trim(),
            firstName: body.firstname,
            lastName: body.lastname,
            email: body.email,
            phone: body.phone || 'Not provided',
            company: body.company,
            role: body.role,
            reason: body.reason,
            message: body.message || 'Not provided',
        }

        const response = await fetch('https://kakrlabs-emailservice-919521117286.europe-west1.run.app/api/Email/SendContactFormEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Apikey': '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',
                'SenderEmail': 'contact@kakr.ai',
                'SenderName': 'Kakr Labs Contact Form'
            },
            body: JSON.stringify(emailData)
        })

        if (!response.ok) {
            const errorText = await response.text()
            throw createError({
                statusCode: response.status,
                statusMessage: errorText || 'Failed to send email'
            })
        }

        return { success: true }
    } catch (error: any) {
        console.error('Contact form error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
