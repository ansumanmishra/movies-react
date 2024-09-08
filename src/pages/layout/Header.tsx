import {AppBar, Box, Button, IconButton, TextField, Toolbar} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Cart from '../cart/Cart.tsx';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from '@mui/material';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (text: string) => {
    setSearchText(text);
    navigate('/', { state: { searchText } });
  }

  return (
    <Box sx={{flexGrow: 1}} style={{marginBottom: '10px'}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            sx={{textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'inherit'}}
          >
            <HomeIcon sx={{color: 'inherit', mr: 1}}/>
            <Button color="inherit">React Cart</Button>
          </Link>
          <Box sx={{flexGrow: 1}}/>
          <TextField id="standard-basic" label="Search" variant="filled"
                     sx={{mr: 2, backgroundColor: 'white', borderRadius: '5px'}}           value={searchText}
                     onChange={(e) => handleSearch(e.target.value)}/>
          <Cart/>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}