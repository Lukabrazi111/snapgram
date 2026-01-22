import SavedPostItem from '@/components/saved-posts/SavedPostItem.tsx';

export default function SavedPostsList() {
    return (
        <section className={'mt-10 grid grid-cols-3 space-x-4'}>
            <SavedPostItem
                name={'John Doe'}
                userImage={'/images/profile.png'}
                postImage={'/images/food2.jpg'}
            />
        </section>
    );
}
