import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";
import Colors from "./Colors";
import ColorPage from "./ColorPage";
import NewColorForm from "./NewColorForm";
import "./App.css";

function App() {
  const defaultColors = { red: "red", green: "green", blue: "blue" };
  const [colors, setColors] = useState(defaultColors);

  const addColor = (colorName, colorCode) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorName]: colorCode,
    }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={addColor} />}
          />
          <Route
            path="/colors/:color"
            element={<ColorPage colors={colors} />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
