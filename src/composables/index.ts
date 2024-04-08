export * from './dark'

export function getAssetsImageFile(url: string) {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}

export function getAssetsVideoFile(url: string) {
  return new URL(`../assets/videos/${url}`, import.meta.url).href
}

export const pageStatus = ref('start')
