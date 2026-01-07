import { Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import HomeFeed from "@/pages/HomeFeed";
import Signup from "@/pages/auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeFeed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}

export default App;
