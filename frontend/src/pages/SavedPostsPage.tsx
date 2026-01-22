import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import SavedIcon from '@/components/icons/SavedIcon.tsx';
import AppLayout from '@/layouts/AppLayout.tsx';
import SavedPostsList from '@/components/saved-posts/SavedPostsList.tsx';

export default function SavedPostsPage() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Saved Posts'} icon={<SavedIcon />} />

                <SavedPostsList />
            </BaseContainer>
        </AppLayout>
    );
}
