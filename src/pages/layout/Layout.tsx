import Footer from './Footer.tsx';
import Header from './Header.tsx';
import {Outlet} from 'react-router-dom';
import {Container} from '@mui/material';
import Sidebar from './Sidebar.tsx';
import Grid from '@mui/material/Grid2';

export default function Layout() {
  return <>
    <Header/>

    <Grid container spacing={2}>
      <Grid size={2}>
        <Sidebar />
      </Grid>
      <Grid size={10}>
        <Container maxWidth={false} sx={{minHeight: '100vh', marginTop: '75px'}}>
          <Outlet/>
        </Container>
      </Grid>
    </Grid>

    <Footer/>
  </>
}