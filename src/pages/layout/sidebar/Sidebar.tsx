import {useDispatch, useSelector} from 'react-redux';
import {setCategories, setSelectedCategory} from '../../../store/categorySlice.ts';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const categories = useSelector((state) => state.categories.data);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

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

  return (
    <>
      <div className="sidebar-container">
        <ul>
          <li
            className={selectedCategory === '' ? 'active' : ''}
            onClick={() => dispatch(setSelectedCategory(''))}
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
    </>
  )
}

export default Sidebar;