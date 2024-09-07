import {useEffect, useState} from 'react';
import './Product.css';
import {Product} from '../../shared/interfaces/Product.ts';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProductCard.tsx';
import Loader from '../../components/Loader.tsx';

const productApiUrl = 'https://fakestoreapi.com/products';

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(productApiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setProducts(data)
        })
        .finally(() => setLoading(false));
    } catch (error) {
      setError(error);
    }

    fetch(productApiUrl)
      .then(response => response.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));
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