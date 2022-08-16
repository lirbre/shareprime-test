import { ItemProps } from '@/typings/items'

export const ItemCard = ({ image, link, title }: ItemProps) => {
  return (
    <a href={link} target={'_blank'} rel="noreferrer">
      <div className="flex h-[90px] w-full items-center justify-between border border-[#000]/20 p-2.5 shadow-md shadow-[#000]/20">
        {/* next image would need hostname config */}
        <img width={75} height={75} alt={`${title} - Image`} src={image} />
        <small className="mt-auto flex w-2/3 justify-end">{title}</small>
      </div>
    </a>
  )
}
