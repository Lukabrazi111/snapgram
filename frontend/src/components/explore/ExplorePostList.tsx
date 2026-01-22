import ExplorePostItem from '@/components/explore/ExplorePostItem.tsx';

export default function ExplorePostList() {
    return (
        <div className={'grid grid-cols-3 gap-4'}>
            <ExplorePostItem />
        </div>
    );
}
