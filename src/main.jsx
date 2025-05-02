import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Global/Layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Shared layout for all child routes
    children: [
      {
        path: '/',
        element: <App />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
