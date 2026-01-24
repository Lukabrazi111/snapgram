import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileLayout from '@/layouts/ProfileLayout.tsx';
import UserPostList from '@/components/user-profile/UserPostList.tsx';
import { useAuthUserStore, type User } from '@/stores/authUserStore.tsx';
import axios from '@/configs/axios.tsx';

export default function ProfilePostsPage() {
    const { username } = useParams<{ username: string }>();
    const authUser = useAuthUserStore((state) => state.user);
    const [profileUser, setProfileUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    // If no username param, show own profile
    const isOwnProfile = !username;

    useEffect(() => {
        if (!username) return;

        let cancelled = false;
        setLoading(true);

        const fetchUser = async () => {
            try {
                const res = await axios.get(`/users/${username}`);
                if (!cancelled) {
                    setProfileUser(res.data);
                }
            } catch {
                if (!cancelled) {
                    setProfileUser(null);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        void fetchUser();

        return () => {
            cancelled = true;
        };
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const user = isOwnProfile ? authUser : profileUser;

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <ProfileLayout user={user}>
            <UserPostList />
        </ProfileLayout>
    );
}
