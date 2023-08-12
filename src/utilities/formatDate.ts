export function formatDate () {
  const date = new Date()
  return new Intl.DateTimeFormat('en-AU', { hour: 'numeric', minute: 'numeric', timeZone: 'America/Lima' }).format(date)
}
