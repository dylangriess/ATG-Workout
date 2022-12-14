import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./navbar.css";

const pages = ["About", "FAQ", "Testimonials", "Contact"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{
        background: "#770000",
        height: "7rem",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "2rem",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "4rem",
              textShadow: "3px 3px 8px black",
            }}
          >
            ATG
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="navbar button"
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
              <a href="#about" style={{ color: "black" }}>
                {pages[0]}
              </a>
              <a href="#FAQ" style={{ color: "black" }}>
                {pages[1]}
              </a>
              <a href="#testimonials" style={{ color: "black" }}>
                {pages[2]}
              </a>
              <a href="#contact" style={{ color: "black" }}>
                {pages[3]}
              </a>
            </Menu>
          </Box>

          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ATG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button>
              <Typography textAlign="center">
                <a href="#about">{pages[0]}</a>
              </Typography>
            </Button>
            <Button>
              <Typography textAlign="center">
                <a href="#FAQ">{pages[1]}</a>
              </Typography>
            </Button>
            <Button>
              <Typography textAlign="center">
                <a href="#testimonials">{pages[2]}</a>
              </Typography>
            </Button>
            <Button>
              <Typography textAlign="center">
                <a href="#contact">{pages[3]}</a>
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
