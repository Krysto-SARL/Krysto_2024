import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

import App from './App'
import HomeScreen from './screens/HomeScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import ProductScreen from './screens/ProductScreen'
import ServicesScreen from './screens/ServicesScreen'
import About from './screens/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="*" element={<NotFoundScreen />} />
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
    </Route>,
  ),
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
