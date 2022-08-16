import { createContext, ReactNode, useState } from 'react'

import { InfoContextProps } from '@/typings/context'
import { ItemProps } from '@/typings/items'

export const InfoContext = createContext({} as InfoContextProps)

interface ToDoProviderProps {
  children: ReactNode
}

export const InfoProvider = ({ children }: ToDoProviderProps) => {
  const [itemList, setItemList] = useState<ItemProps[]>([
    {
      image:
        'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
      order: 10,
      title: 'google image',
      id: 1
    },
    {
      image:
        'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
      order: 11,
      title: 'google image',
      id: 2
    },
    {
      image:
        'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-728px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg',
      link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fagenciamoll.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FO-que-%25C3%25A9-URL-e-como-ela-Ajuda-na-sua-Estrat%25C3%25A9gia-Digital.jpg&imgrefurl=https%3A%2F%2Fagenciamoll.com.br%2Fo-que-e-url-e-como-ela-ajuda-na-sua-estrategia-digital%2F&tbnid=cWJNzoM0B_y5ZM&vet=12ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ..i&docid=P6ggEaEnGmyl8M&w=1600&h=1288&q=image%20url&ved=2ahUKEwjYzrXw98v5AhWXBbkGHdiXCMIQMygBegUIARDfAQ',
      order: 12,
      title: 'google image',
      id: 3
    }
  ])

  const addItem = ({ image, link, order, title }: ItemProps) => {
    setItemList([
      ...itemList,
      {
        id: 1,
        image,
        link,
        order,
        title
      }
    ])
  }

  const removeItem = (id: number) => {
    const newList = [...itemList]

    const correct = newList.find((item) => item.id === id)
    const position = newList.indexOf(correct!)

    newList.splice(position, 1)

    setItemList(newList)
  }

  const editItem = ({ id, image, link, order, title }: ItemProps) => {
    const newList = [...itemList]
    const correct = newList.find((item) => item.id === id)

    correct!.title = title
    correct!.image = image
    correct!.link = link
    correct!.order = order

    setItemList(newList)
  }

  //   useEffect(() => {

  //   }, [itemList]);

  return (
    <InfoContext.Provider
      value={{
        addItem,
        editItem,
        removeItem,
        itemList
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}
