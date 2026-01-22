import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import CreatePostIcon from '@/components/icons/CreatePostIcon.tsx';

export default function CreatePostPage() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Create Post'} icon={<CreatePostIcon />} />
            </BaseContainer>
        </AppLayout>
    );
}
