import TopCreatorsItem from '@/components/home-feed/TopCreatorsItem.tsx';

export default function TopCreatorsList() {
    return (
        <div className={'mt-10 mb-14 grid grid-cols-1 2xl:grid-cols-2 gap-4'}>
            <TopCreatorsItem />
        </div>
    );
}
