import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("/colors")}>Colors</button>
    </>
  );
}

export default HomePage;
