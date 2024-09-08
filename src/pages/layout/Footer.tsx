import {Box, Container, Link, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <Box sx={{backgroundColor: '#f8f8f8', py: 4, mt: 'auto'}}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Typography variant="body1">
              © {new Date().getFullYear()}. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}