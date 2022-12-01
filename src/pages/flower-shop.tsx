import FlowerShop from '../flower-shop/pages/FlowerShop'
import Error from '../lib/components/Error'
import { getFlowers } from '../services/flowers'

export const getServerSideProps = async () => {
  try {
    const flowersList = await getFlowers()
    return {
      props: {
        error: null,
        flowersList,
      },
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        error,
        flowersList: null,
      },
    }
  }
}

type PageProps = {
  error: Error | null
  flowersList: Flower[] | null
}

const Page = ({ error, flowersList }: PageProps) => {
  return (
    <>
      {error && <Error message={error.message} />}
      {flowersList && <FlowerShop flowers={flowersList} />}
    </>
  )
}

export default Page
