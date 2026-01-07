import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomeFeed from "./pages/HomeFeed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeFeed />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
