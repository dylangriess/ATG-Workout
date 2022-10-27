import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./navbar.css";

const pages = ["About", "Contact Us", "Blog"];
console.log(pages);

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
      style={{ background: "#770000" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ATG Workouts
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navbar button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon>
                <Link smooth to="/"></Link>;
              </MenuIcon>
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
              <MenuItem key={pages[0]} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#about">
                    {pages[0]}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key={pages[1]} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#contact">
                    {pages[1]}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key={pages[2]} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#blog">
                    {pages[2]}
                  </Link>
                </Typography>
              </MenuItem>
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
            ATG Workouts
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button>
              <Typography textAlign="center">
                <Link smooth to="#about">
                  {pages[0]}
                </Link>
              </Typography>
            </Button>
            <Button>
              <Typography textAlign="center">
                <Link smooth to="#contact">
                  {pages[1]}
                </Link>
              </Typography>
            </Button>
            <Button>
              <Typography textAlign="center">
                <Link smooth to="#blog">
                  {pages[2]}
                </Link>
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
