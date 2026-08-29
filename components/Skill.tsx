import Image from 'next/image'

type Props = {
  img: string
  title: string
}

export default function Skill({ img, title }: Props) {
  return (
    <div className="group relative flex">
      <Image
        src={img}
        alt={title}
        width={112}
        height={112}
        className="h-20 w-20 rounded-full border border-border object-cover transition-transform duration-300 group-hover:scale-105 md:h-28 md:w-28"
        title={title}
      />
    </div>
  )
}
