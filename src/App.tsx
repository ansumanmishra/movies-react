import './App.css'
import ProductListing from './pages/product/ProductListing.tsx';
import ProductDetails from './pages/product/ProductDetails.tsx';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router';
import Layout from './pages/layout/Layout.tsx';
import About from './pages/about/About.tsx';
import {Container} from '@mui/material';
import CartListing from './pages/cart/CartListing.tsx';

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
        element: <CartListing />
      },
      {
        path: 'about',
        element: <About/>
      }
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
