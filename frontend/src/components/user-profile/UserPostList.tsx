import UserPostItem from '@/components/user-profile/UserPostItem.tsx';

export default function UserPostList() {
    return (
        <div className={'grid grid-cols-3 gap-5 mt-10 mb-14'}>
            <UserPostItem />
        </div>
    );
}