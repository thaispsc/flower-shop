import Shop from '../flower-shop/pages/Shop'
import NextError from '../lib/components/NextError'
import { getAllFlowers } from '../services/flowers'

export const getServerSideProps = async () => {
  try {
    const flowersList = await getAllFlowers()
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
        error: JSON.parse(JSON.stringify(error)),
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
      {error && <NextError message={error.message} />}
      {flowersList && <Shop flowers={flowersList} />}
    </>
  )
}

export default Page
