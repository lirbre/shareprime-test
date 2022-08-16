import { useMemo } from 'react'

import { useInfo } from '@/hooks'
import { ItemProps } from '@/typings/items'

import { EditCard } from './editcard'

export const ListEdit = () => {
  const { itemList } = useInfo()

  const memoizedCards = useMemo(
    () =>
      (itemList || []).map(({ image, link, order, title, id }: ItemProps) => (
        <EditCard
          key={id}
          image={image}
          link={link}
          order={order}
          title={title}
          id={id}
        />
      )),
    [itemList]
  )

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">{memoizedCards}</div>
  )
}
