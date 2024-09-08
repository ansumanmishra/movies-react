import {Button, Card, CardActions, CardContent, CardMedia, Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Product} from '../../shared/interfaces/Product.ts';
import {useDispatch} from 'react-redux';
import {addCart} from '../../store/cartSlice.ts';

const ProductCard = ({product}: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '300px'}}>
      <Link component={RouterLink} to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
          sx={{objectFit: 'contain'}}
        />
      </Link>
      <CardContent sx={{flexGrow: 1}}>
        <Link component={RouterLink} to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
          <Typography noWrap variant="h6" gutterBottom sx={{color: 'text.secondary'}}>
            {product.title}
          </Typography>
        </Link>
        <Typography variant="h6" sx={{color: 'text.secondary', mb: 1.5}}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button size="small" endIcon={<AddShoppingCartIcon/>} onClick={() => dispatch(addCart(product))}></Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard;