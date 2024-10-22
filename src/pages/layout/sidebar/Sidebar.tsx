import {useDispatch, useSelector} from 'react-redux';
import {setCategories, setSelectedCategory} from '../../../store/categorySlice.ts';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Sidebar.css';
import {fetchProducts} from '../../../store/productSlice.ts';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {data: products, loadingState} = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories.data);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const productCategories = products.reduce((acc, product) => {
        if (!acc.includes(product.category)) {
          acc.push(product.category);
        }
        return acc;
      }, []);

      dispatch(setCategories(productCategories));
    }
  }, [products]);

  const handleCategoryClick = (category) => {
    navigate('/');
    dispatch(setSelectedCategory(category));
  }

  if (loadingState === 'failed') {
    return (
      <div className="sidebar-container">
        <div>Something went wrong</div>
      </div>
    );
  }

  return (
    <>
      <div className="sidebar-container">
        {loadingState === 'succeeded' ? (
          <div>
            <ul>
              <li
                className={selectedCategory === '' ? 'active' : ''}
                onClick={() => handleCategoryClick('')}
              >
                All
              </li>
              {categories?.length ? categories.map(category => (
                <li
                  key={category}
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              )) : (
                <li>No categories found</li>
              )}
            </ul>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  )
}

export default Sidebar;