export type CurrentUser = {
  createdAt: Date
  displayName: string
  email: string
  id: number
  [propType: string]: any
}

export type SectionsData = {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
  size?: string
}

export type CollectionItemType = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type ShopItem = {
  id: number
  title: string
  routeName: string
  items: CollectionItemType[]
}

export type ShopData = {
  [propName: string]: ShopItem
}
