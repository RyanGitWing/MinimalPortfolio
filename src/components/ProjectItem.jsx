import React from "react";
import { Box } from "@mui/material";

function ProjectItem({ title, imgURL, stack, link }) {
  return (
    <div className="hover:scale-125">
      <Box
        borderRadius={2}
        border="2px solid"
        borderColor="primary.main"
        overflow="hidden"
        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
      >
        <img
          src={imgURL}
          alt="Portfolio Item"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item) => (
              <Box
                display="inline-block"
                px={1}
                py={0.5}
                fontWeight="bold"
                border="2px solid"
                borderColor="primary.main"
                borderRadius={2}
              >
                {item}
              </Box>
            ))}
          </p>
        </div>
      </Box>
    </div>
  );
}

export default ProjectItem;
