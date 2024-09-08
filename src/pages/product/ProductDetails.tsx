import {Product} from '../../shared/interfaces/Product.ts';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid2';
import Loader from '../../components/Loader.tsx';

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
    return <Loader />
  }

  if (product) {
    return (
      <>
        <Grid key={product.id}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'row', gap: '100px'}}>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.title}
                sx={{objectFit: 'contain'}}
              />
              <div>
                <Typography noWrap variant="h4" gutterBottom>
                  {product.title}
                </Typography>

                <Typography sx={{color: 'text.secondary', mb: 5}}>
                  ${product.price}
                </Typography>

                <Typography sx={{color: 'text.secondary'}}>
                  {product.description}
                </Typography>
              </div>
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