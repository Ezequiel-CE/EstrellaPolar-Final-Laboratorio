import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D0646',
    },
    secondary: pink,
  },
  // breakpoints: {
  //   values: {
  //     laptop: 1024,
  //     tablet: 640,
  //     mobile: 0,
  //     desktop: 1280,
  //   },
  // },
});

export default theme;
