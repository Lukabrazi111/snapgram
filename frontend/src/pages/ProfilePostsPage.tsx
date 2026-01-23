import ProfileLayout from '@/layouts/ProfileLayout.tsx';
import UserPostList from '@/components/user-profile/UserPostList.tsx';

export default function ProfilePostsPage() {
    return (
        <ProfileLayout>
            <UserPostList />
        </ProfileLayout>
    );
}
