import React from 'react';
import { Container, Grid, Box, Link, Typography, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => (
  <footer>
    <Box py={{ xs: 2, sm: 4 }} bgcolor="text.primary" color="white">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Typography color="inherit">Contact:</Typography>
              <Box display="flex" direction="row" pb="1px">
                <Box>
                  <Button variant="icon" color="inherit" sx={{ borderRadius: '50%' }}>
                    <FacebookIcon />
                  </Button>
                </Box>
                <Box>
                  <Button variant="icon" color="inherit" sx={{ borderRadius: '50%' }}>
                    <InstagramIcon />
                  </Button>
                </Box>
                <Box>
                  <Button variant="icon" color="inherit" sx={{ borderRadius: '50%' }}>
                    <TwitterIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box display="flex" direction="row" py="1px">
              <Box pl="1.1em" pr="1em">
                <PhoneIcon />
              </Box>
              <Typography color="inherit">+54 9 380-4999999</Typography>
            </Box>
            <Box display="flex" direction="row" py="1px">
              <Box pl="1.1em" pr="1em">
                <EmailIcon />
              </Box>
              <Typography color="inherit">flights@estrellapolar.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>About us</Box>
            <Box pt="1em" pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Company
              </Link>
            </Box>
            <Box pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Information
              </Link>
            </Box>
            <Box>
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Reviews
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>Account</Box>
            <Box pt="1em" pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="/login" color="inherit">
                Login
              </Link>
            </Box>
            <Box pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="registro" color="inherit">
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box borderBottom={1}>Legal</Box>
            <Box pt="1em" pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Terms of Service
              </Link>
            </Box>
            <Box pb="0.3em">
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Terms of Use
              </Link>
            </Box>
            <Box>
              <Link style={{ textDecoration: 'none' }} href="/" color="inherit">
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 4, sm: 8 }} pb={{ xs: 4, sm: 4 }}>
          {`Estrella Polar 
          © ${new Date().getFullYear()} Copyright: EstrellaPolar.com`}
        </Box>
      </Container>
    </Box>
  </footer>
);

export default Footer;
