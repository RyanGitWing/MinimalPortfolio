import React, {useState, useEffect} from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  Button,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-scroll";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const pages = ["About", "Skills", "Experiences", "Projects", "Contact"];
  
  const [offset, setOffset] = useState(-150);

  // Update offset based on screen width
  useEffect(() => {
    const handleResize = () => {
      // Set your responsive breakpoints and corresponding offsets here
      if (window.innerWidth < 768) {
        setOffset(-80); // Adjust the offset value for small screens
      } else {
        setOffset(-150); // Default offset for larger screens
      }
    };

    // Call handleResize on initial load and whenever window is resized
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
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
        <Box sx={{ display: "flex", gap: 4 }}>
          {pages.map((page) => (
            <Link
              key={page}
              to={page.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={offset}
            >
              <Button
                sx={{
                  color: "secondary.main",
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
