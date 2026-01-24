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
import SavedPostsPage from '@/pages/SavedPostsPage.tsx';
import CreatePostPage from '@/pages/posts/CreatePostPage.tsx';
import ProfilePostsPage from '@/pages/profile/ProfilePostsPage.tsx';
import ProfileLikedPosts from '@/pages/profile/ProfileLikedPostsPage.tsx';
import ProfileEditPage from '@/pages/profile/ProfileEditPage.tsx';
import PostPage from '@/pages/posts/PostPage.tsx';
import EditPostPage from '@/pages/posts/EditPostPage.tsx';

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
                {/* Main routes */}
                <Route path="/" element={<HomeFeedPage />} />
                <Route path={'/explore'} element={<ExplorePage />} />
                <Route path={'/people'} element={<PeoplePage />} />
                <Route path={'/saved'} element={<SavedPostsPage />} />

                {/* Own profile routes */}
                <Route path={'profile'}>
                    <Route index element={<ProfilePostsPage />} />
                    <Route path="liked-posts" element={<ProfileLikedPosts />} />
                    <Route path="edit" element={<ProfileEditPage />} />

                    {/* Other user's profile routes */}
                    <Route path=":username" element={<ProfilePostsPage />} />
                </Route>

                {/* Posts routes */}
                <Route path={'posts'}>
                    <Route path={':postId'} element={<PostPage />} />
                    <Route path={'create'} element={<CreatePostPage />} />
                    <Route path={':postId/edit'} element={<EditPostPage />} />
                </Route>
            </Route>

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default App;
