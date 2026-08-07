export default defineEventHandler(async () => {
  try {
    const data = await $fetch('https://ipapi.co/json/')
    return data
  } catch {
    return { country_code: 'US' }
  }
})
