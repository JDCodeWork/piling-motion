import { Children, PropsWithChildren, useEffect, useState } from "react"

import { motion } from 'motion/react'

export const PilingContainer = ({ children }: PropsWithChildren) => {

  const [view, setView] = useState(0)

  const content = Children.map(children, child => child) ?? []

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown)
    document.addEventListener('wheel', handleOnWheel)

    return () => {
      document.removeEventListener('keydown', handleOnKeyDown)
      document.removeEventListener('wheel', handleOnWheel)
    }
  }, []);

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.key == "w" || e.key == "ArrowUp") {
      return handleOnUp()
    }

    if (e.key == "s" || e.key == "ArrowDown") {
      return handleOnDown()
    }
  }

  const handleOnWheel = (e: WheelEvent) => {
    if (e.deltaY < 0) handleOnUp()
    else handleOnDown()
  }

  const handleOnUp = () => {
    setView(prev => prev + 1)
  }

  const handleOnDown = () => {
    setView(prev => prev - 1)
  }

  useEffect(() => {
    console.log('view', view)
  }, [view]);

  return (
    <div className="rounded-2xl shadow-2xl w-[740px] h-[400px] overflow-hidden">
      <motion.div
        className="h-full w-full"
      >
        {content[Math.abs(view) % content.length]}
      </motion.div>
    </div>
  )
}