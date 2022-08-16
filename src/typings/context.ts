import { ItemProps } from './items'

export interface InfoContextProps {
  itemList: ItemProps[]
  addItem({ id, image, link, order, title }: ItemProps): void
  removeItem(id: number): void
  editItem({ id, image, link, order, title }: ItemProps): void
}
