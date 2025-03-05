import { Children, PropsWithChildren, useEffect, useState } from "react"

import { motion } from 'motion/react'

export const PilingContainer = ({ children }: PropsWithChildren) => {

  const [view, setView] = useState(0)

  const content = Children.map(children, child => child) ?? []

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)

    return () => document.removeEventListener('keydown', handleOnKeyDown)
  }, []);

  const handleOnKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        handleOnUp()
        break;
      case 's':
      case 'ArrowDown':
        handleOnDown()
        break;
      default:
        break;
    }
  }

  const handleOnUp = () => {
    setView(prev => prev + 1)
  }

  const handleOnDown = () => {
    setView(prev => prev - 1)
  }

  return (
    <motion.div
      className="grid h-screen w-screen place-content-center"
    >
      {content[Math.abs(view) % content.length]}
    </motion.div>
  )
}