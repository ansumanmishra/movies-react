import {Link} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {Product} from '../../models/Product.ts';
import {useDispatch} from 'react-redux';
import {addCart} from '../../store/cartSlice.ts';
import {FaCartPlus} from "react-icons/fa";

const ProductCard = ({product}: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <FaCartPlus className="fa-cart-plus" onClick={() => dispatch(addCart(product))} style={{position: 'absolute', top: '10px', cursor: 'pointer', right: '5px'}}/>
      <Link component={RouterLink} to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
        <img src={product.image} alt={product.title}/>
      </Link>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductCard;