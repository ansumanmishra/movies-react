import {Product} from '../../../models/Product.ts';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Loader from '../../../components/Loader.tsx';
import {useDispatch} from 'react-redux';
import {addCart} from '../../../store/cartSlice.ts';
import './ProductDetails.css';

const URL = 'https://fakestoreapi.com/products';

export default function ProductDetails() {
  const {id} = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

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
        <div class="product-details">
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