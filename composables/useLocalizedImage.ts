export const useLocalizedImage = (imagePath: string) => {
  const { locale } = useI18n()
  
  // Extract file name and extension
  const lastDot = imagePath.lastIndexOf('.')
  const basePath = imagePath.substring(0, lastDot)
  const extension = imagePath.substring(lastDot)
  
  // Try to use localized version, fallback to default
  const localizedPath = `${basePath}-${locale.value}${extension}`
  
  return {
    src: localizedPath,
    fallback: imagePath
  }
}

// Helper to get image with automatic fallback
export const getLocalizedImageSrc = (imagePath: string, locale: string = 'en') => {
  const lastDot = imagePath.lastIndexOf('.')
  const basePath = imagePath.substring(0, lastDot)
  const extension = imagePath.substring(lastDot)
  
  return `${basePath}-${locale}${extension}`
}
