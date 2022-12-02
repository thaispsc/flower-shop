import { rest } from 'msw'

export const mockGetFlowersEndpoint = () => ({
  request: rest.get('http://localhost:3333/flowers', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Daisy',
          image:
            'https://images.pexels.com/photos/11420027/pexels-photo-11420027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: '5,00',
        },
        {
          id: 2,
          name: 'Sun Flower',
          image:
            'https://images.pexels.com/photos/5551654/pexels-photo-5551654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: '3,00',
        },
        {
          id: 3,
          name: 'White Rose',
          image:
            'https://images.pexels.com/photos/8569653/pexels-photo-8569653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: '4,50',
        },
        {
          id: 4,
          name: 'Orchild',
          image:
            'https://images.pexels.com/photos/12573405/pexels-photo-12573405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          price: '3,75',
        },
      ]),
    )
  }),
})