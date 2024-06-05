export default function Button({
  children,
  className,
  onClick
}: {
  children: React.ReactNode
  text: string
  className: string
  onClick: () => void
}) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
