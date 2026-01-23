import ProfileLayout from '@/layouts/ProfileLayout.tsx';
import UserLikedPostList from '@/components/user-profile/UserLikedPostList.tsx';

export default function ProfileLikedPosts() {
    return (
        <ProfileLayout>
            <UserLikedPostList />
        </ProfileLayout>
    );
}
