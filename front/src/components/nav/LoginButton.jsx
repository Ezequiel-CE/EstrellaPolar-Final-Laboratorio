import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginButton = () => (
  <div>
    <Button
      variant="contained"
      color="orange"
      component={Link}
      to="/login"
      sx={{
        mr: 4,
        flexGrow: 1,
        display: { xs: 'flex', md: 'flex' },
        justifyContent: 'end',
        alignItems: 'center',
      }}

    >
      Login

    </Button>
  </div>
);

export default LoginButton;
