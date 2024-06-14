import React from "react";
import Title from "./Title";
import { useTheme } from "@emotion/react";

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
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md"
            style={{ color: theme.palette.primary.background, backgroundColor: theme.palette.primary.main}}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
