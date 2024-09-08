import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux';
import {Badge} from '@mui/material';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  return (
    <>
      {cartProducts.length ? (
        <Badge badgeContent={cartProducts.length} color="primary">
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