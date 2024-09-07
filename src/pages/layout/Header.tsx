import {AppBar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Cart from '../product/Cart.tsx';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom: '10px'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <HomeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Cart />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}