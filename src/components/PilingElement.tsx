import { ReactNode } from "react"
import { motion, usePresenceData, Variants } from 'motion/react'

import { Direction } from '../hooks/usePiling'

const variants: Variants = {
  start: (direction: Direction) => ({
    y: direction == "up" ? 1 : -400,
    transition: {
      duration: .4
    }
  }),
  animation: {
    y: 0,
    transition: {
      duration: .4
    }
  },
  end: (direction: Direction) => ({
    y: direction == "up" ? -400 : 1,
    zIndex: direction == "up" ? 100 : 0,
    transition: {
      duration: .4
    }
  })
}


interface Props {
  view: number
  content: ReactNode[]
  onEndAnimation?: () => void
}
export const PilingElement = ({ view, content, onEndAnimation }: Props) => {
  const direction = usePresenceData()

  return (
    <motion.div
      key={view}
      className="relative"
      custom={direction}
      variants={variants}
      initial="start"
      animate="animation"
      exit="end"
      onAnimationComplete={onEndAnimation}
      layout
    >
      {content[Math.abs(view) % content.length]}
    </motion.div>
  )
}