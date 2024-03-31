import { useState } from "react";
import "./App.css";
import State from "./components/State";
import Effect from "./components/Effect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <State />
      <Effect />
    </>
  );
}

export default App;
