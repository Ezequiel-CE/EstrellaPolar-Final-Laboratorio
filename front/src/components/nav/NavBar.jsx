import * as React from 'react';
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import OrangeIcon from '../../assets/logo.svg';
import LoginButton from './LoginButton';
import UserAvatar from './UserAvatar';
import { useApiContext } from '../../context/state';

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const pages = [
  { name: 'Mi Pasaje', path: '/pasaje' },
  { name: 'Vuelo', path: '/vuelos' },
];

function NavBar() {
  const { state } = useApiContext();
  const { auth } = state;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={OrangeIcon}
              style={{
                transform: 'rotateX(50deg) rotate(29deg) translate(40px)',
                color: 'white',
                maxHeight: '3.5rem',
              }}
              alt="Icono estrella polar"
            />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Estrella Polar
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ textDecoration: 'none' }}
                  >
                    <Link to={page.path} key={page.name} style={{ textDecoration: 'none' }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 1, color: 'black', display: 'block' }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontSize: 15,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Estrella Polar
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <Link to={page.path} key={page.name} style={{ textDecoration: 'none' }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                mr: 3,
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              {auth ? (
                <UserAvatar
                  handleOpenUserMenu={handleOpenUserMenu}
                  handleCloseUserMenu={handleCloseUserMenu}
                  anchorElUser={anchorElUser}
                />
              ) : (
                <LoginButton />
              )}
              {/* <UserAvatar
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                anchorElUser={anchorElUser}
              /> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default NavBar;
