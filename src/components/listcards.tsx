import { useMemo } from 'react'

import { ItemProps } from '@/typings/items'

import { ItemCard } from './itemcard'

const mockedItems: ItemProps[] = [
  {
    image:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
    link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
    order: '10',
    title: 'google image'
  },
  {
    image:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
    link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
    order: '10',
    title: 'google image'
  },
  {
    image:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
    link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
    order: '10',
    title: 'google image'
  }
]

export const ListCards = () => {
  const memoizedCards = useMemo(
    () =>
      mockedItems.map(({ image, link, order, title }, i) => (
        <ItemCard
          key={i}
          image={image}
          link={link}
          order={order}
          title={title}
        />
      )),
    []
  )

  return <div className="grid grid-cols-3 gap-4">{memoizedCards}</div>
}
