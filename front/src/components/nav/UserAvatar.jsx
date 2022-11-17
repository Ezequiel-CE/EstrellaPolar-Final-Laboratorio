import React from 'react';
import { IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApiContext } from '../../context/state';

const UserAvatar = ({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) => {
  const { desLogear } = useApiContext();
  const navigate = useNavigate();

  const settings = [
    {
      nombre: 'Tus Pasajeros',
      click: () => {
        navigate('/pasajeros');
      },
    },
    {
      nombre: 'Cerrar sesión',
      click: () => {
        desLogear();
        navigate('/');
        navigate(0);
      },
    },
  ];

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.nombre}
            onClick={() => {
              handleCloseUserMenu();
              setting.click();
            }}
          >
            <Typography textAlign="center">{setting.nombre}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserAvatar;
