import FlowerIdPage from '../../flower-shop/pages/FlowerIdPage'
import NextError from '../../lib/components/NextError'
import { getAllFlowers, getFlowerById } from '../../services/flowers'

interface ServerSideProps {
  params: { flowerId?: string }
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  if (!params.flowerId) {
    return {
      props: {
        error: JSON.parse(
          JSON.stringify(new Error('Invalid params: missing flower id')),
        ),
        flower: null,
      },
    }
  }

  const { flowerId } = params

  try {
    const flower = await getFlowerById(flowerId)
    const flowersList = await getAllFlowers()

    return {
      props: {
        error: null,
        flower,
        flowersList,
      },
    }
  } catch (e) {
    const error = e as Error
    return {
      props: {
        error: JSON.parse(JSON.stringify(error)),
        flower: null,
        flowersList: null,
      },
    }
  }
}

type PageProps = {
  error: Error | null
  flower: Flower | null
  flowersList: Flower[] | null
}

const Page = ({ error, flower, flowersList }: PageProps) => {
  return (
    <>
      {error && <NextError message={error.message} />}
      {flower && <FlowerIdPage flower={flower} flowers={flowersList} />}
    </>
  )
}

export default Page
