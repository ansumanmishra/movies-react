import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid2';
import ProductCard from '../product/ProductCard.tsx';

const CartListing = () => {
  const cartItems = useSelector((state) => state.cart.products);

  if (cartItems.length === 0) {
    return <div>Cart is empty</div>
  }

  return <Grid container spacing={4} columns={16}>
        {cartItems.map(product => (
          <Grid key={product.id} size={4}>
            <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
}
export default CartListing;