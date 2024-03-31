import { useState } from "react";
import "./App.css";
import State from "./components/State";
import Effect from "./components/Effect";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeContextProvider>
      <State />
      <Effect />
    </ThemeContextProvider>
  );
}

export default App;
