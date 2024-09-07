import {useEffect, useState} from 'react';
import './Product.css';
import {Product} from '../../shared/interfaces/Product.ts';
import {Link} from 'react-router-dom';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong, please try again</div>
  }

  return (
    <>
      <Grid container spacing={2} columns={16}>
        {products.map(product => (
          <Grid key={product.id} size={4}>
            <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '300px'}}>
              <CardContent sx={{flexGrow: 1}}>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                  <Typography noWrap variant="body2" gutterBottom>
                    {product.title}
                  </Typography>
                </Link>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                  sx={{objectFit: 'contain'}}
                />
                <Typography sx={{color: 'text.secondary', mb: 1.5}}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent: 'flex-end'}}>
                <Button size="small" endIcon={<AddShoppingCartIcon/>} variant="contained">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}