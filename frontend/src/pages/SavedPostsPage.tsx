import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import SavedIcon from '@/components/icons/SavedIcon.tsx';
import AppLayout from '@/layouts/AppLayout.tsx';
import SavedPostsList from '@/components/saved-posts/SavedPostsList.tsx';

export default function SavedPostsPage() {
    return (
        <AppLayout>
            <BaseContainer>
                <div className={'flex items-center space-x-4'}>
                    <SavedIcon className={'w-10 h-10 text-white'} />
                    <PageTitle title={'Saved Posts'} />
                </div>

                <SavedPostsList />
            </BaseContainer>
        </AppLayout>
    );
}
