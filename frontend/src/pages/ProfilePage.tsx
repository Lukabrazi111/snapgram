import AppLayout from '@/layouts/AppLayout';
import BaseContainer from '@/components/BaseContainer.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import UserProfileDetails from "@/components/user-profile/UserProfileDetails.tsx";

export default function ProfilePage() {
    return (
        <AppLayout>
            <BaseContainer>
                <section className={'flex justify-between'}>
                    <UserProfileDetails name={'Alex Johnson'} username={'alexj'} image={''} />

                    <button
                        className={
                            'self-start bg-surface hover:bg-surface/90 transition-colors px-4 py-3 rounded-lg flex items-center space-x-2 cursor-pointer text-sm text-nowrap'
                        }
                    >
                        <EditButtonIcon className={'text-primary w-5 h-auto'} />
                        <span>Edit Profile</span>
                    </button>
                </section>
            </BaseContainer>
        </AppLayout>
    );
}
