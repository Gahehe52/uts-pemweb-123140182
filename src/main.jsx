import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Impor komponen Halaman (Pages)
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CoinDetail from './pages/CoinDetail.jsx'

// Mendefinisikan rute aplikasi
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.jsx akan menjadi layout utama
    children: [
      {
        path: '/',
        element: <Home />, // Halaman utama
      },
      {
        path: '/coin/:id', // Halaman detail dengan parameter :id
        element: <CoinDetail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)