interface ImageProps {
  url: string
}
const image = ({ url }: ImageProps) => {
  return <img src={url} className="rounded-2xl shadow-2xl w-[740px] h-[400px]" />
}

export default {
  image
}