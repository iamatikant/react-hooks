import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Context = () => {
  const darkTheme = useContext(ThemeContext);
  const headerStyles = {
    color: darkTheme ? "red" : "black",
  };
  return (
    <div>
      <h1 style={headerStyles}>This is changing on theme context.</h1>
    </div>
  );
};

export default Context;
