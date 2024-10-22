import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux';
import {Badge} from '@mui/material';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {cartItems.length ? (
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon/>
        </Badge>
      ) : (
        <ShoppingCartIcon/>
      )
      }
    </>
  )
}

export default Cart;