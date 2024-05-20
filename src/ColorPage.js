import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ColorPage({ colors }) {
  const { color } = useParams();
  const navigate = useNavigate();
  const colorCode = colors[color];

  // If color does not exist, redirect to the colors index page
  useEffect(() => {
    // If color does not exist, redirect to the colors index page
    if (!colorCode) {
      navigate("/colors");
    }
  }, [colorCode, navigate]);

  return (
    <div style={{ backgroundColor: colorCode, height: "100vh" }}>
      <h1>{`THIS IS ${color.toUpperCase()}.`}</h1>
      <h1>ISN'T IT BEAUTIFUL?</h1>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorPage;
