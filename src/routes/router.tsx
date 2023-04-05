import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { ErrorPage } from '@/pages/ErrorPage'
import { Checkout } from '@/pages/Checkout'
import { Root } from '@/pages/Root'
import { routesNames } from './routesNames'
import { Confirmed } from '@/pages/Confirmed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: routesNames.checkout,
        element: <Checkout />,
      },
      {
        path: routesNames.confirmed,
        element: <Confirmed />,
      },
    ],
  },
])
