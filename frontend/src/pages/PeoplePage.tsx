import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
// import Button from '@/components/ui/Button.tsx';
import PeopleList from '@/components/people/PeopleList.tsx';

export default function PeoplePage() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'All Users'} />

                <PeopleList />
            </BaseContainer>
        </AppLayout>
    );
}
