import { defineEventHandler, readBody, createError } from 'h3'

console.log('Loading /api/pilot-request handler...')

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        // Format the pilot request data for email
        const emailData = {
            to: 'contact@kakr.ai', // TODO: Update with actual pilot review email
            subject: `New Pilot Request: ${body.companyName}`,
            companyName: body.companyName,
            website: body.website,
            industry: body.industry,
            companySize: body.companySize,
            goals: body.goals.join(', '),
            monthlyOTPVolume: body.monthlyOTPVolume || 'Not specified',
            monthlyAPICalls: body.monthlyAPICalls || 'Not specified',
            currentAuthMethod: body.currentAuthMethod || 'Not specified',
            experiencedFraud: body.experiencedFraud || 'Not specified',
            backendLanguage: body.backendLanguage || 'Not specified',
            cloudProvider: body.cloudProvider || 'Not specified',
            deploymentPreference: body.deploymentPreference || 'Not specified',
            technicalLeadName: body.technicalLeadName,
            securityContactEmail: body.securityContactEmail,
            phone: body.phone || 'Not provided'
        }

        const response = await fetch('https://kakrlabs-emailservice-919521117286.europe-west1.run.app/api/Email/SendPilotRequestEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Apikey': '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',
                'SenderEmail': 'contact@kakr.ai',
                'SenderName': 'Kakr Labs Pilot Program'
            },
            body: JSON.stringify(emailData)
        })

        if (!response.ok) {
            const errorText = await response.text()
            throw createError({
                statusCode: response.status,
                statusMessage: errorText || 'Failed to send pilot request'
            })
        }

        // TODO: Optionally integrate with Slack notification
        // TODO: Optionally create entry in CRM/database

        return { success: true }
    } catch (error: any) {
        console.error('Pilot request error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
