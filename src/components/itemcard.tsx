import { ItemProps } from '@/typings/items'

export const ItemCard = ({ image, link, title }: ItemProps) => {
  return (
    <a href={link} target={'_blank'} rel="noreferrer">
      <div className="flex w-full items-center justify-between border border-[#000]/20 p-2.5 shadow-md shadow-[#000]/20">
        <small>{title}</small>
        {/* next image would need hostname config */}
        <img width={75} height={75} alt={`${title} - Image`} src={image} />
      </div>
    </a>
  )
}
