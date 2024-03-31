import React, { useEffect, useState } from "react";

const Effect = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const resizeScreenCallback = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreenCallback);
    return () => {
      window.removeEventListener("resize", resizeScreenCallback);
    };
  }, [windowSize]);

  return (
    <div>
      <span>{windowSize}</span>
    </div>
  );
};

export default Effect;
