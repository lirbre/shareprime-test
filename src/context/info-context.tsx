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
      image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      link: 'https://www.linkedin.com/in/lirbre/',
      order: 10,
      title: 'Linkedin',
      id: 1
    },
    {
      image:
        'https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png',
      link: 'https://github.com/lirbre',
      order: 11,
      title: 'Github',
      id: 2
    },
    {
      image: 'https://nerdin.com.br/img/empresa/2544.png',
      link: 'https://www.shareprime.com.br/',
      order: 12,
      title: 'Shareprime',
      id: 3
    }
  ])

  const addItem = ({ image, link, order, title }: ItemProps) => {
    setItemList([
      ...itemList,
      {
        id: Math.max(...itemList.map((item) => item.id)) + 1,
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
