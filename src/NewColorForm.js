import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function NewColorForm({ addColor }) {
  const initialState = {
    colorName: "",
    color: "#000000",
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const colorNameInputId = uuidv4();
  const colorInputId = uuidv4();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { colorName, color } = formData;
    addColor(colorName, color);
    navigate("/colors");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={colorNameInputId}>Color name: </label>
        <input
          id={colorNameInputId}
          type="text"
          name="colorName"
          placeholder="Enter a name for the color."
          value={formData.colorName}
          onChange={handleChange}
        />
        <label htmlFor={colorInputId}>Pick a color: </label>
        <input
          id={colorInputId}
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}

export default NewColorForm;
