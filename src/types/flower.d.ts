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

interface User {
  id: string
  username: string
  password: string
}
