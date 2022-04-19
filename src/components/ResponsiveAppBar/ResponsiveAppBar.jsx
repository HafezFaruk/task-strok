import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";



import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import styled from "@emotion/styled";


// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#1E90FF",
  borderColor: "#1E90FF",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
  

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Box sx={{ color: "black" }}>
                  <MenuIcon />
                </Box>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{ marginRight: "1rem" }}
                      variant="h6"
                      component="h6"
                    >
                      <Link to="/pohoto" href="/">
                        POHOTO
                      </Link>
                    </Typography>
                    <Typography
                      sx={{ marginRight: "1rem" }}
                      variant="h6"
                      component="h6"
                    >
                      <Link to="/">GALLERUES</Link>
                    </Typography>

                    <Typography
                      sx={{ marginRight: "1rem" }}
                      variant="h6"
                      component="h6"
                    >
                      <Link to="/group">GROUPS</Link>
                    </Typography>
                    <Typography
                      sx={{ marginRight: "1rem" }}
                      variant="h6"
                      component="h6"
                    >
                      <Link to="/about">
                        ABOUT
                      </Link>
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
              <Typography
                sx={{ marginRight: "1rem" }}
                variant="h6"
                component="h6"
              >
                <Link to="/pohoto" href="/">
                  POHOTO
                </Link>
              </Typography>
              <Typography
                sx={{ marginRight: "1rem" }}
                variant="h6"
                component="h6"
              >
                <Link to="/">GALLERUES</Link>
              </Typography>

              <Typography
                sx={{ marginRight: "1rem" }}
                variant="h6"
                component="h6"
              >
                <Link to="/group">GROUPS</Link>
              </Typography>
              <Typography
                sx={{ marginRight: "1rem" }}
                variant="h6"
                component="h6"
              >
                <Link to="/about">ABOUT</Link>
              </Typography>
            </Box>
          </Box>

          <BootstrapButton variant="contained" disableRipple>
            Follow
          </BootstrapButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;