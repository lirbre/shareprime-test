import { useMemo } from 'react'

import { useInfo } from '@/hooks'

import { ItemCard } from './itemcard'

export const ListCards = () => {
  const { itemList } = useInfo()

  const memoizedCards = useMemo(
    () =>
      (itemList || [])
        .sort((a, b) => b.order - a.order)
        .map(({ image, link, order, title, id }) => (
          <ItemCard
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
