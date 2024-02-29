import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import StorePage from './pages/StorePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import MainPage from './pages/MainPage.tsx'
import SingleItemPage from './pages/SingleItemPage.tsx'
import Layout from './Layout.tsx'
import CartPage from './pages/CartPage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/cart', element: <CartPage /> },
      { path: 'store/items/:id', element: <SingleItemPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
