export default defineEventHandler(async (event) => {
  const startedAt = Date.now()
  const debugId = `pricing-gate-${startedAt}-${Math.random().toString(16).slice(2, 8)}`
  const body = await readBody(event)
  const portalId = '245270532'
  const pricingFormId = 'dd539f36-a424-41de-b1fa-a6604a7a14e9'
  const adminNotificationFormId = 'addaed80-8534-4ae5-9642-4ce1cf2b98fc'
  const sourceFields = Array.isArray(body?.fields) ? body.fields : []
  const context = body?.context || {}

  const fieldValue = (name: string) => {
    const field = sourceFields.find((item: any) => item?.name === name)

    return typeof field?.value === 'string' ? field.value.trim() : field?.value
  }

  const safePayloadForLog = (payload: any) => ({
    fieldNames: Array.isArray(payload?.fields)
      ? payload.fields.map((field: any) => field?.name)
      : [],
    fieldValues: Array.isArray(payload?.fields)
      ? payload.fields.reduce((acc: Record<string, any>, field: any) => {
          acc[field?.name] = field?.value
          return acc
        }, {})
      : {},
    pageUri: payload?.context?.pageUri,
    pageName: payload?.context?.pageName,
    hasConsent: Boolean(payload?.legalConsentOptions?.consent?.consentToProcess)
  })

  const submitToHubSpot = async (label: string, formId: string, payload: any) => {
    console.log(`[pricing-gate] ${debugId} submitting ${label}`, JSON.stringify({
      formId,
      ...safePayloadForLog(payload)
    }))

    return $fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }
    )
  }

  const pricingDetails = [
    '[PRICING GATE V2]',
    `Full Name: ${fieldValue('firstname') || 'N/A'}`,
    `Work Email: ${fieldValue('email') || 'N/A'}`,
    `Contact Number: ${fieldValue('phone') || 'N/A'}`,
    `Company Name: ${fieldValue('0-2/name') || 'N/A'}`,
    `Company Email: ${fieldValue('work_email') || fieldValue('0-2/company_email') || 'N/A'}`,
    `Company Web: ${fieldValue('0-2/website') || 'N/A'}`,
    `Company Contact: ${fieldValue('mobilephone') || fieldValue('0-2/company_contact_number_optional') || 'N/A'}`,
    `Role: ${fieldValue('0-2/your_role') || 'N/A'}`,
    `Company Size: ${fieldValue('0-2/company_sizes') || 'N/A'}`,
    `Interested In: ${fieldValue('0-2/what_are_you_interested_in') || 'N/A'}`,
  ].join('\n')

  const adminNotificationPayload = {
    fields: [
      { name: 'firstname', value: fieldValue('firstname') || 'N/A' },
      { name: 'lastname', value: fieldValue('lastname') || '-' },
      { name: 'email', value: fieldValue('email') || '' },
      { name: 'phone', value: fieldValue('phone') || '' },
      { name: '0-2/name', value: fieldValue('0-2/name') || '' },
      { name: '0-2/your_role', value: fieldValue('0-2/your_role') || 'Not specified' },
      { name: 'reason_to_contact_us', value: 'Pricing & Plans' },
      { name: 'message', value: pricingDetails },
    ].filter((field) => field.value !== undefined && field.value !== null && field.value !== ''),
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'By clicking submit, you consent to allow Kakr Labs, Inc. to store and process the personal information submitted.',
        communications: []
      }
    },
    context: {
      pageUri: context.pageUri || '',
      pageName: context.pageName || 'Pricing Unlock Gate V2',
    },
  }

  try {
    const pricingResponse = await submitToHubSpot('unlock pricing form', pricingFormId, body)
    console.log(`[pricing-gate] ${debugId} unlock pricing form success:`, JSON.stringify(pricingResponse))

    let adminResponse = null
    let adminNotificationError = null

    try {
      adminResponse = await submitToHubSpot('admin notification form', adminNotificationFormId, adminNotificationPayload)
      console.log(`[pricing-gate] ${debugId} admin notification form success:`, JSON.stringify(adminResponse))
    } catch (adminError: any) {
      adminNotificationError = adminError?.data || adminError?.response?._data || adminError?.message || 'Unknown error'
      console.error(`[pricing-gate] ${debugId} admin notification form error:`, JSON.stringify(adminNotificationError))
      throw createError({
        statusCode: 400,
        statusMessage: typeof adminNotificationError === 'string'
          ? adminNotificationError
          : (adminNotificationError?.errors?.[0]?.message || adminNotificationError?.message || 'HubSpot admin notification failed'),
        data: { debugId, hubspot: adminNotificationError, stage: 'adminNotification' }
      })
    }

    return {
      success: true,
      data: {
        debugId,
        pricingForm: pricingResponse,
        adminNotification: adminResponse,
        adminNotificationError,
        elapsedMs: Date.now() - startedAt
      }
    }
  } catch (error: any) {
    const errBody = error?.data || error?.response?._data || error?.message || 'Unknown error'
    console.error(`[pricing-gate] ${debugId} unlock pricing form error:`, JSON.stringify(errBody))
    throw createError({
      statusCode: 400,
      statusMessage: typeof errBody === 'string' ? errBody : (errBody?.errors?.[0]?.message || errBody?.message || 'HubSpot submission failed'),
      data: { debugId, hubspot: errBody }
    })
  }
})
