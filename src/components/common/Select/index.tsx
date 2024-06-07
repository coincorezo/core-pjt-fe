'use client'

interface Props {
  className?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  required?: boolean
  disabled?: boolean
  options: { value: string; text: string }[]
}

export default function Select({ className, value, onChange, name, required, disabled, options }: Props) {
  return (
    <select className={className} value={value} onChange={onChange} name={name} required={required} disabled={disabled}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
