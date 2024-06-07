'use client'

// type ButtonType = string
type ButtonType = 'button' | 'submit' | 'reset'

interface Props {
  children: React.ReactNode
  type?: ButtonType
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Button({ children, type = 'button', className = 'button', onClick, disabled }: Props) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
