import Cart from '../../cart/Cart.tsx';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import {useState} from 'react';
import './Header.css';
import {SITE_TITLE} from '../../../constants/config.ts';

export default function ButtonAppBar() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [searchText, setSearchText] = useState(keyword || '');
  const navigate = useNavigate();

  const handleSearch = (text: string) => {
    if (!text) {
      setSearchText('');
      navigate('/');
    } else {
      setSearchText(text);
      navigate('?keyword=' + text );
    }
  }

  return (
    <div className="toolbar">
      <Link to="/">{SITE_TITLE}</Link>
      <input type="text" value={searchText} onChange={(e) => handleSearch(e.target.value)}/>
      <Link to="/cart">
        <Cart/>
      </Link>
    </div>
  );
}