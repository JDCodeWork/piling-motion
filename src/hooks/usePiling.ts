import { useState, Children, useEffect, ReactNode, useRef } from "react";

export type Direction = 'none' | 'up' | 'down'

interface Props {
  children: ReactNode
}
export const usePiling = ({ children }: Props) => {
  const [view, setView] = useState(0)
  const [direction, setDirection] = useState<Direction>('none')

  const isAnimating = useRef(false)

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
    if (isAnimating.current) return

    setDirection('up')
    setView(prev => prev + 1)

    isAnimating.current = true;
  }

  const handleOnDown = () => {
    if (isAnimating.current) return

    setDirection('down')
    setView(prev => prev - 1)

    isAnimating.current = true;
  }

  const handleEndAnimation = () => isAnimating.current = false

  return {
    view,
    content,
    direction,
    handleEndAnimation
  }
}