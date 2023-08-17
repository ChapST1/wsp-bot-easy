import { formatMessage } from '@/utilities/formatMessages'

interface FormatMessageProps {
  message: string
}

export function FormatMessage ({ message }: FormatMessageProps) {
  const formatCurrentMessage = formatMessage(message)

  return (
    <>
      {formatCurrentMessage.map((message, index) => {
        return (
          <p key={index}>{message}</p>
        )
      })}
    </>
  )
}
