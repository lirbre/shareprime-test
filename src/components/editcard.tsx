import { useRouter } from 'next/router'

import { ItemProps } from '@/typings/items'

export const EditCard = ({ image, title, id }: ItemProps) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(`/admin/edit/${id}`)}
      className="flex h-[90px] w-full cursor-pointer items-center justify-between border border-[#000]/20 p-2.5 shadow-md shadow-[#000]/20"
    >
      <small>{title}</small>
      {/* next image would need hostname config */}
      <img width={75} height={75} alt={`${title} - Image`} src={image} />
    </div>
  )
}
