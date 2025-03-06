import { useState, Children, useEffect, ReactNode } from "react";

export type Direction = 'none' | 'up' | 'down'

interface Props {
  children: ReactNode
}
export const usePiling = ({ children }: Props) => {
  const [view, setView] = useState(0)
  const [direction, setDirection] = useState<Direction>('none')

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
    setDirection('up')
    setView(prev => prev + 1)
  }

  const handleOnDown = () => {
    setDirection('down')
    setView(prev => prev - 1)
  }

  return {
    view,
    content,
    direction
  }
}