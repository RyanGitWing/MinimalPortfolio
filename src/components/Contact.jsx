import React from "react";
import Title from "./Title";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const HoverButton = styled(Button)(({ theme }) => ({
  // backgroundColor: theme.palette.accent.background, // Use theme primary color
  color: theme.palette.primary.background,
  backgroundImage: `linear-gradient(90deg, #00ffa6 50%,  ${theme.palette.primary.main} 50%)`,
  backgroundSize: "200% 100%",
  backgroundPosition: "right bottom",
  transition: "background-position 0.5s ease-out",
  "&:hover": {
    backgroundPosition: "left bottom",
  },
}));

function Contact() {
  const theme = useTheme();

  return (
    <div className="flex flex-col mb-10 mx-auto mt-[100px] p-8">
      <Title>Contact</Title>
      <div className="flex justify-center items-center mt-12">
        <form
          action="https://getform.io/f/pbygrolb"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent rounded-md"
            style={{ border: `2px solid ${theme.palette.primary.main}` }}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent rounded-md"
            style={{ border: `2px solid ${theme.palette.primary.main}` }}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent rounded-md"
            style={{ border: `2px solid ${theme.palette.primary.main}` }}
          />
          <HoverButton
            type="submit"
            sx={{
              display: "inline-block",
              py: "12px",
              fontWeight: "700",
              borderRadius: "8px",
            }}
          >
            Send
          </HoverButton>
        </form>
      </div>
    </div>
  );
}

export default Contact;
