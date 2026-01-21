import PostItem from '@/components/home-feed/PostItem.tsx';

export default function PostList() {
    return (
        <div className="mt-10 flex-1 pr-5 space-y-4">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
}
