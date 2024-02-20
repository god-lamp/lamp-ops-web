import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Lamp-Ops'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
