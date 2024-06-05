export default function Button({
  children,
  className,
  onClick,
  disabled = false
}: {
  children: React.ReactNode
  className: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
