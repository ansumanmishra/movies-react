import {useEffect, useState} from 'react';
import ProductCard from '../product-card/ProductCard.tsx';
import Loader from '../../../components/Loader.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../../store/productSlice.ts';
import {useSearchParams} from 'react-router-dom';
import './Product.css';

export default function ProductListing() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const {data: products, loadingState} = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    dispatch(fetchProducts());
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

  if (loadingState === 'loading') {
    return <Loader/>
  }

  if (loadingState === 'failed') {
    return <div>Something went wrong, please try again</div>
  }

  if (loadingState === 'succeeded' && filteredProducts.length === 0) {
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