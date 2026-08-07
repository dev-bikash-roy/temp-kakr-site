import { defineEventHandler, readBody, createError } from 'h3'

console.log('Loading /api/chat handler...')

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        // Forward the request to n8n webhook
        const n8nWebhookUrl = 'https://n8n-official-kakrlabs12334fhf.kakr.ai/webhook/7dad868e-4b35-44c4-a00a-3bca9cb0d00f/chat'
        
        console.log('Forwarding chat request to n8n:', body)

        const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('n8n webhook error:', errorText)
            throw createError({
                statusCode: response.status,
                statusMessage: errorText || 'Failed to get response from AI'
            })
        }

        const data = await response.json()
        console.log('n8n response:', data)
        
        return data
    } catch (error: any) {
        console.error('Chat proxy error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
