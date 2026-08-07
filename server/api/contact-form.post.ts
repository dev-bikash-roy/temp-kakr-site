export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await $fetch(
    'https://api.hsforms.com/submissions/v3/integration/submit/245270532/addaed80-8534-4ae5-9642-4ce1cf2b98fc',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }
  )

  return { success: true, data: response }
})
