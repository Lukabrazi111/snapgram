import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import HomeFeed from '@/pages/HomeFeed';
import Register from '@/pages/auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeFeed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
