import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import MainPage from '../pages/MainPage.tsx'
import StorePage from '../pages/StorePage.tsx'
import CartPage from '../pages/CartPage.tsx'
import SingleItemPage from '../pages/SingleItemPage.tsx'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      {
        path: '/store',
        element: <StorePage />,
      },
      { path: '/cart', element: <CartPage /> },
      { path: 'store/items/:id', element: <SingleItemPage /> },
    ],
  },
])
