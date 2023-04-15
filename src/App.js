import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

// import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route name="Home" path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;