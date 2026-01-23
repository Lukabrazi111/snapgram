import UserLikedPostItem from '@/components/user-profile/UserLikedPostItem.tsx';

export default function UserLikedPostList() {
    return (
        <div className={'mt-10 mb-14 grid grid-cols-3 space-x-4 gap-5'}>
            <UserLikedPostItem />
        </div>
    );
}
