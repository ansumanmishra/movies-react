import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../../../store/cartSlice.ts';
import './ProductDetails.css';
import {getProductById} from '../../../store/productSlice.ts';

export default function ProductDetails() {
  const {id} = useParams();
  const product = useSelector((state) => getProductById(state.products, +id));
  const dispatch = useDispatch();

  if (product) {
    return (
      <>
        <div className="product-details">
          <img src={product.image} alt={product.title} style={{width: '400px', height: '400px'}}/>
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => dispatch(addCart(product))}>Add to cart</button>
        </div>
      </>
    )
  }
}