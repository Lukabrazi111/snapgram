import PeopleItem from '@/components/people/PeopleItem.tsx';

export default function PeopleList() {
    return (
        <section className={'mt-10 mb-14 grid grid-cols-3 gap-5'}>
            <PeopleItem
                name={'Alex Johnson'}
                username={'alexj'}
                userImage={'/images/profile.png'}
            />
        </section>
    );
}
