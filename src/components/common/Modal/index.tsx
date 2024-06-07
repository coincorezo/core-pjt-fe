'use client'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  width?: number
  height?: number
}

export default function Modal({ children, isOpen, onClose, width = 500, height = 500 }: Props) {
  return (
    <>
      {isOpen && (
        <div className={'modal-overlay'}>
          <div className={'modal-container'} style={{ width: `${width}px`, height: `${height}px` }}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
