import React from "react";
import { CssBaseline, Box, IconButton } from "@mui/material";
import { useThemeContext } from "./ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ModeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <Box display="flex" justifyContent="right">
        <CssBaseline />
        <IconButton
          sx={{ backgroundColor: "primary.background", p: "10px", "&:hover": { backgroundColor: theme === "light" ? '#355b70' : '#e9c46b' }, borderRadius: '6px !important' }}
          onClick={toggleTheme}
        >
          {theme === "light" ? <DarkModeIcon sx={{color:"secondary.background"}}/> : <LightModeIcon />}
        </IconButton>
      </Box>
    </div>
  );
}

export default ModeToggle;
