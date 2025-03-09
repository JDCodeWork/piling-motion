import clsx from "clsx"

interface Props {
  views: number
  active: number
}
export const PilingNav = ({ active, views }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      {
        Array.from({ length: views }, (_, idx) => (
          <span key={idx} className={clsx("size-4 rounded-full shadow transition-all", Math.abs(active % views) == idx ? "bg-slate-400 h-8" : "bg-slate-300")} />
        ))
      }
    </div>
  )
}