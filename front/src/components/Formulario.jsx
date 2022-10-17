/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AmaticSCBold from "../assets/AmaticSCBold.ttf";
import Avion from "../assets/login-logo.jpg";

const theme = createTheme({
  palette: {
    orange: {
      main: "#D8552B",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Amatic SC, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Amatic SC';
          font-style: bold;
          font-display: swap;
          font-weight: 400;
          src: local('Amatic SC'), local('Amatic SC-Bold'), url(${AmaticSCBold}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default function Formulario() {
  return (
    <Card
      width={"542px"}
      height={"660px"}
      sx={{
        p: "40px 71px 20px 71px",
        borderRadius: "20px",
        ml: "48px",
        backgroundColor: "#F3F3F3",
        boxShadow:
          "200px 132px 96px rgba(0, 0, 0, 0.01), 113px 74px 81px rgba(0, 0, 0, 0.05), 50px 33px 60px rgba(0, 0, 0, 0.09), 13px 8px 33px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Welcome</Typography>
          <Typography variant="h5">to</Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Amatic SC",
              fontWeight: "bold",
            }}
          >
            Unstick Airlines
          </Typography>
        </ThemeProvider>
      </Grid>
      <CardMedia
        component="img"
        style={{ height: 100, paddingTop: "15px" }}
        image={Avion}
        alt="Plain Logo"
      />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={5}
        >
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="orange"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Card>
  );
}
