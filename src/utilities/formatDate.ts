/*
  * La función formatDate() devuelve la hora actual en formato de 12 horas.
  * ejemplo de uso: formatDate() -> 12:00 AM
  * esta funcion se utiliza en el componente Chatbot/playground para mostrar la hora de los mensajes
*/

export function formatDate () {
  const date = new Date()
  return new Intl.DateTimeFormat('en-AU', { hour: 'numeric', minute: 'numeric', timeZone: 'America/Lima' }).format(date)
}
