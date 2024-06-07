'use client'

import { useState } from 'react'

interface Props {
  ref?: React.RefObject<HTMLTextAreaElement>
  rows?: number
  cols?: number
  className?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export default function Textarea({
  ref,
  rows = 6,
  cols = 20,
  className = 'textarea',
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled
}: Props) {
  const [inputValue, setInputValue] = useState(value)

  return (
    <textarea
      ref={ref}
      rows={rows}
      cols={cols}
      className={className}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={e => {
        setInputValue(e.target.value)
        onChange && onChange(e)
      }}
      required={required}
      disabled={disabled}
    />
  )
}
