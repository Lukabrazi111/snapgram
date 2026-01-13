import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import HomeFeed from '@/pages/HomeFeed';
import Register from '@/pages/auth/Register';
import { PrivateRoutes } from './components/protected-routes/PrivateRoutes';
import { GuestRoutes } from './components/protected-routes/GuestRoutes';

function App() {
    return (
        <Routes>
            {/* Guest Routes */}
            <Route element={<GuestRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<HomeFeed />} />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default App;
