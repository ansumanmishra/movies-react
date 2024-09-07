import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Product} from '../../shared/interfaces/Product.ts';

const ProductCard = ({product}: { product: Product }) => {
  return (
    <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '300px'}}>
      <CardContent sx={{flexGrow: 1}}>
        <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
          <Typography noWrap variant="body2" gutterBottom>
            {product.title}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            sx={{objectFit: 'contain'}}
          />
        </Link>
        <Typography sx={{color: 'text.secondary', mb: 1.5}}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button size="small" endIcon={<AddShoppingCartIcon/>} variant="contained">Add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard;