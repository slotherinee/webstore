export type Product = {
  id: string | number
  title: string
  price: number
  category: string
  description: string
  image: string
  itemId?: string
  isPressed?: boolean
  quantity?: number
  rating: {
    rate: number
    count: number
  }
}
