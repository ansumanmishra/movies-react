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
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const products = useSelector((state) => state.products.data);
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  useEffect( () => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products])

  if (loading) {
    return  <Loader />
  }

  if (error) {
    return <div>Something went wrong, please try again</div>
  }

  return (
    <>
      <Grid container spacing={4} columns={16}>
        {filteredProducts.map(product => (
          <Grid key={product.id} size={4}>
            <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}