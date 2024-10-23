import './App.css'
import ProductListing from './pages/product/product-listing/ProductListing.tsx';
import ProductDetails from './pages/product/product-details/ProductDetails.tsx';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router';
import Layout from './pages/layout/Layout.tsx';
import CartListing from './pages/cart/CartListing.tsx';
import React from 'react';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <ProductListing/>,
      },
      {
        path: "product/:id",
        element: <ProductDetails/>,
      },
      {
        path: 'cart',
        element: <CartListing/>
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
