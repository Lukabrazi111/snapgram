import ProfileLayout from '@/layouts/ProfileLayout.tsx';
import UserLikedPostList from '@/components/user-profile/UserLikedPostList.tsx';
import { useAuthUserStore } from '@/stores/authUserStore.tsx';

export default function ProfileLikedPosts() {
    const authUser = useAuthUserStore((state) => state.user);

    return (
        <ProfileLayout user={authUser}>
            <UserLikedPostList />
        </ProfileLayout>
    );
}
