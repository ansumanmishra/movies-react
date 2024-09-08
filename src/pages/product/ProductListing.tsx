import {useEffect, useState} from 'react';
import './Product.css';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProductCard.tsx';
import Loader from '../../components/Loader.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {addProducts} from '../../store/productSlice.ts';

const productApiUrl = 'https://fakestoreapi.com/products';

export default function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(productApiUrl)
        .then(response => response.json())
        .then(data => {
          dispatch(addProducts(data))
        })
        .finally(() => setLoading(false));
    } catch (error) {
      setError(error);
    }
  }, []);

  if (loading) {
    return  <Loader />
  }

  if (error) {
    return <div>Something went wrong, please try again</div>
  }

  return (
    <>
      <Grid container spacing={2} columns={16}>
        {products.map(product => (
          <Grid key={product.id} size={4}>
            <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}