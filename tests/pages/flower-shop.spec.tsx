import { getServerSideProps } from '../../src/pages/flower-shop'

describe('getServerSideProps', () => {
  it('should return a array of objects', async () => {
    const { props } = await getServerSideProps()
    expect(props).toBeDefined()
  })
})
