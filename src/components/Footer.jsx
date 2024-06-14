import React from "react";
import IconButton from "@mui/material/IconButton";
import {GitHub, LinkedIn, Instagram} from '@mui/icons-material';

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <IconButton>
              <GitHub fill-current/>
            </IconButton>
            <IconButton>
              <LinkedIn fill-current/>
            </IconButton>
            <IconButton>
              <Instagram fill-current/>
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
