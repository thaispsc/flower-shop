import { useEffect, useState } from 'react'
import FlowerShop from '../flower-shop/pages/FlowerShop'
import { getFlowers } from '../services/flowers'

const Page = () => {
  const [flowersList, setFlowersList] = useState<Flower[]>([] as Flower[])

  useEffect(() => {
    const renderFlowers = async () => {
      const flowers = await getFlowers()
      setFlowersList(flowers)
    }
    renderFlowers()
  }, [])
  return <FlowerShop flowers={flowersList} />
}

export default Page
