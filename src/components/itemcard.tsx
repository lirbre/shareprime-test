import { ItemProps } from '@/typings/items'

export const ItemCard = ({ image, link, title }: ItemProps) => {
  return (
    <a href={link} target={'_blank'} rel="noreferrer">
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 border border-[#000]/20 p-2.5 shadow-md shadow-[#000]/20 md:h-[90px] md:flex-row md:gap-0">
        {/* next image would need hostname config */}
        <img width={75} height={75} alt={`${title} - Image`} src={image} />
        <small className="mt-auto flex w-2/3 justify-center md:justify-end">
          {title}
        </small>
      </div>
    </a>
  )
}
