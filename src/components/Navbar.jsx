import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  Button,
  IconButton,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const pages = ["About", "Skills", "Experiences", "Projects", "Contact"];
  const theme = useTheme();
  const [offset, setOffset] = useState(-150);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth < theme.breakpoints.values.md ? -40 : -150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints]);

  const renderMenuItems = () => {
    return pages.map((page) => (
      <Link
        key={page}
        to={page.toLowerCase()}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={offset}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem sx={{ fontWeight: 600 }} onClick={handleClose}>
          {page}
        </MenuItem>
      </Link>
    ));
  };

  return !isMdScreen ? (
    <>
      <Typography
        position="absolute"
        top="0"
        left="0"
        m="20px"
        variant="h6"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        color="primary.main"
      >
        rynuyn
      </Typography>
      <Box sx={{ position: "fixed", top: "0", right: "0", m: "14px" }} zIndex="1">
        <IconButton onClick={handleClick}>
          <MenuIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
          {renderMenuItems()}
        </Menu>
        <ModeToggle />
      </Box>
    </>
  ) : (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "secondary.background",
        borderRadius: "6px",
        width: "90%",
        left: "50%",
        transform: "translateX(-50%)",
        mt: 2,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          pr: "12px !important",
        }}
      >
        <CssBaseline />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          color="secondary.main"
        >
          rynuyn
        </Typography>
        <Box sx={{ display: "flex", gap: { md: 1, lg: 4 } }}>
          {pages.map((page) => (
            <Link
              key={page}
              to={page.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={offset}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  "&:hover": {
                    color: "accent.background",
                    backgroundColor: "accent.main",
                  },
                }}
              >
                {page}
              </Button>
            </Link>
          ))}
        </Box>
        <ModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
