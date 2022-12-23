interface Flower {
  id: string
  name: string
  image: string
  price: number
  description: string
  review: FlowerReview
}
interface FlowerReview {
  authorName: string
  comment: string
  stars: number
}
