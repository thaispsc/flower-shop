interface Flower {
  id: string
  name: string
  image: string
  price: number
  description: string
  reviews: FlowerReview[]
}
interface FlowerReview {
  id: string
  authorName: string
  authorPhoto: string
  comment: string
  stars: number
}
