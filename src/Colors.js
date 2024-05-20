import Color from "./Color";
import { useNavigate } from "react-router-dom";
import "./Colors.css";

function Colors({ colors }) {
  const colorsLink = Object.entries(colors).map(([colorName, colorCode]) => (
    <Color key={colorName} color={colorName} colorCode={colorCode} />
  ));

  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to the color factory</h1>
      <button onClick={() => navigate("/colors/new")}>Add a color</button>
      <p>Please select a color.</p>
      <div className="Colors-colors-link">{colorsLink}</div>
    </>
  );
}

export default Colors;
