import { PropsWithChildren } from "react"
import { AnimatePresence } from 'motion/react'

import { PilingElement } from "./PilingElement"
import { usePiling } from "../hooks/usePiling"

interface Props extends PropsWithChildren {
}
export const PilingContainer = ({ children }: Props) => {
  const { view, content, direction } = usePiling({ children })

  return (
    <div className="rounded-2xl shadow-2xl w-[740px] h-[400px] overflow-hidden">
      <AnimatePresence
        custom={direction}
      >
        <PilingElement key={view} content={content} view={view} />
      </AnimatePresence>
    </div>
  )
}
