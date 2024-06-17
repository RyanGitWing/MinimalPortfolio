import React from "react";
import { Box } from "@mui/material";

function ProjectItem({ title, imgURL, stack, link }) {
  const handleClick = () => {

  }
  return (
    <a href={link} target="_blank" className="duration-150 md:hover:scale-150 flex flex-col h-full cursor-pointer">
      <Box
        borderRadius={2}
        border="2px solid"
        borderColor="primary.main"
        overflow="hidden"
        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.15)"
        backgroundColor="primary.background"
        className="flex flex-col h-full"
      >
        <img
          src={imgURL}
          alt="Portfolio Item"
          className="w-full h-36 md:h-72 object-cover rounded-2xl p-2"
        />
        <div className="flex flex-col justify-between flex-grow p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-bold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-1 items-end text-xs md:text-sm">
            {stack.map((item, index) => (
              <Box
                key={index}
                display="inline-block"
                px={1}
                py={0.5}
                border="2px solid"
                borderRadius={2}
                backgroundColor="primary.main"
                color='primary.background'
              >
                {item}
              </Box>
            ))}
          </p>
        </div>
      </Box>
    </a>
  );
}

export default ProjectItem;
