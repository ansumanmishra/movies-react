import Footer from './Footer.tsx';
import Header from './Header.tsx';
import {Outlet} from 'react-router-dom';
import {Container} from '@mui/material';

export default function Layout() {
  return <>
    <Header/>
    <Container maxWidth={false} sx={{minHeight: '100vh', marginTop: '75px'}}>
      <Outlet/>
    </Container>
    <Footer/>
  </>
}