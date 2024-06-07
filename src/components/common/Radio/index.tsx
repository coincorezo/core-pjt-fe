'use client'

import { useState } from 'react'

interface Props {
  children: React.ReactNode
  name: string
  value: string
  checked?: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
}

export default function Radio({ children, name, value, checked, onChange, disabled, required }: Props) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={e => {
          setIsChecked(e.target.checked)
          onChange(e.target.checked)
        }}
        disabled={disabled}
        required={required}
      />
      {children}
    </>
  )
}
