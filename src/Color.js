import { Link } from "react-router-dom";

function Color({ color }) {
  return (
    <>
      <Link to={`/colors/${color}`}>{color}</Link>
    </>
  );
}

export default Color;
