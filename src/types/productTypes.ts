export type Product = {
  itemId?: string
  id: string | number
  title: string
  price: number
  category: string
  description: string
  image: string
  isPressed?: boolean
  rating: {
    rate: number
    count: number
  }
}
