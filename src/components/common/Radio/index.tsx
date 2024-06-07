'use client'

import { useState } from 'react'

interface Props {
  children: React.ReactNode
  name: string
  id: string
  value: string
  checked?: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
}

export default function Radio({
  children = 'radio-button',
  name,
  id,
  value,
  checked,
  onChange,
  disabled,
  required
}: Props) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={isChecked}
        onChange={e => {
          setIsChecked(e.target.checked)
          onChange(e.target.checked)
        }}
        disabled={disabled}
        required={required}
      />
      <label htmlFor={id}>{children}</label>
    </>
  )
}
