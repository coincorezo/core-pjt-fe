'use client'

import { useState } from 'react'

interface Props {
  ref?: React.RefObject<HTMLInputElement>
  className?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

export default function InputText({
  ref,
  className = 'input-text',
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled
}: Props) {
  const [inputValue, setInputValue] = useState(value)

  return (
    <input
      type="text"
      ref={ref}
      className={className}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      onChange={e => {
        setInputValue(e.target.value)
        onChange && onChange(e)
      }}
    />
  )
}
