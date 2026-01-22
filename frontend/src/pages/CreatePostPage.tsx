import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import CreatePostIcon from '@/components/icons/CreatePostIcon.tsx';

export default function CreatePostPage() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Create Post'} icon={<CreatePostIcon />} />

                <section className={'mt-10'}>
                    <div className={'flex flex-col space-y-2'}>
                        <label htmlFor="caption">Caption</label>
                        <textarea
                            className={
                                'border border-white/10 rounded-lg bg-secondary focus:outline-none px-3 py-2 text-sm'
                            }
                            name="caption"
                            id="caption"
                            cols={30}
                            rows={8}
                        />
                    </div>
                </section>
            </BaseContainer>
        </AppLayout>
    );
}
