import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyles from './styles/globalStyles'
import Login from './containers/Login' 
import Checkout from './containers/Checkout'
import Home from './containers/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "checkout",
    element: <Checkout />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
