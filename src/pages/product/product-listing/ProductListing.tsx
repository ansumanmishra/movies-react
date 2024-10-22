import {useEffect, useState} from 'react';
import ProductCard from '../product-card/ProductCard.tsx';
import Loader from '../../../components/Loader.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {addProducts} from '../../../store/productSlice.ts';
import {useSearchParams} from 'react-router-dom';
import './Product.css';
import {PRODUCT_API_URL} from '../../../constants/config.ts';

export default function ProductListing() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const products = useSelector((state) => state.products.data);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    setLoading(true);
    try {
      fetch(PRODUCT_API_URL)
        .then(response => response.json())
        .then(data => {
          dispatch(addProducts(data))
        })
        .finally(() => setLoading(false));
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    if (selectedCategory && keyword) {
      const filteredProducts = products.filter(product =>
        product.category === selectedCategory &&
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    } else if (selectedCategory) {
      const filteredProducts = products.filter(product =>
        product.category === selectedCategory
      );
      setFilteredProducts(filteredProducts);
    } else if (keyword) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products, keyword]);

  if (loading) {
    return <Loader/>
  }

  if (error) {
    return <div>Something went wrong, please try again</div>
  }

  if (filteredProducts.length === 0) {
    return <div>No products found</div>
  }

  return (
    <>
      <div className="product-listing-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  )
}