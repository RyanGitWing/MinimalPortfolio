import React from "react";
import IconButton from "@mui/material/IconButton";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <IconButton href="https://github.com/RyanGitWing">
              <GitHub fill-current />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/ryan-nguyen-156837202/">
              <LinkedIn fill-current />
            </IconButton>
            <IconButton href="https://www.instagram.com/daryanwing/">
              <Instagram fill-current />
            </IconButton>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Ryan Nguyen. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
