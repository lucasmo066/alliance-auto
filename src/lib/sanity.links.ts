export function resolveHref(
    documentType?: string,
    slug?: string
  ): string | undefined {
    switch (documentType) {
      case 'global':
        return '/'
        case 'car':
        return `/cars/${slug}`

      default:
        console.warn('Invalid document type:', documentType)
        return undefined
    }
  }