import React from "react";

function Title({ children, id }) {
  return (
    <div>
      <h1
        id={id && id}
        className="text-center text-4xl font-bold underline underline-offset-8 decoration-4 mb-5"
      >
        {children}
      </h1>
    </div>
  );
}

export default Title;
