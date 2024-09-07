import {Product} from '../../shared/interfaces/Product.ts';
import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid2';

const URL = 'https://fakestoreapi.com/products';

export default function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productResponse = await fetch(`${URL}/${id}`).finally(() => setLoading(false));
      const data = await productResponse.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (product) {
    return (
      <>
        <Grid key={product.id}>
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
      </>
    )
  }
}