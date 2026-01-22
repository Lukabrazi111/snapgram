import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import HomeFeedPage from '@/pages/HomeFeedPage.tsx';
import Register from '@/pages/auth/Register';
import { PrivateRoutes } from '@/components/protected-routes/PrivateRoutes';
import { GuestRoutes } from '@/components/protected-routes/GuestRoutes';
import ForgotPassword from '@/pages/reset-password/ForgotPassword';
import ResetPassword from '@/pages/reset-password/ResetPassword';
import ExplorePage from '@/pages/ExplorePage.tsx';
import PeoplePage from '@/pages/PeoplePage.tsx';

function App() {
    return (
        <Routes>
            {/* Guest Routes */}
            <Route element={<GuestRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<HomeFeedPage />} />
                <Route path={'/explore'} element={<ExplorePage />} />
                <Route path={'/people'} element={<PeoplePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default App;
