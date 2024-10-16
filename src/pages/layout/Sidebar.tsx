import {useDispatch, useSelector} from 'react-redux';
import {setCategories, setSelectedCategory} from '../../store/categorySlice.ts';
import {useEffect} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';

const Sidebar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const categories = useSelector((state) => state.categories.data);

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
    dispatch(setSelectedCategory(category));
  }

  return (
    <>
      <div className="sidebar-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {
              categories.map((category) => (
                <FormControlLabel key={category} value={category} control={<Radio/>} label={category}
                                  onClick={() => handleCategoryClick(category)}/>
              ))
            }
          </RadioGroup>
        </FormControl>
      </div>
    </>
  )
}

export default Sidebar;