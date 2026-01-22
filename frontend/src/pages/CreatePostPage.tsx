import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import CreatePostIcon from '@/components/icons/CreatePostIcon.tsx';
import UploadImageIcon from '@/components/icons/UploadImageIcon.tsx';
import Button from '@/components/ui/Button.tsx';

export default function CreatePostPage() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Create Post'} icon={<CreatePostIcon />} />

                <form
                    action={'#'}
                    method={'POST'}
                    className={'mt-10 mb-14 space-y-10'}
                >
                    <div className={'flex flex-col space-y-2'}>
                        <label htmlFor="caption">Caption</label>
                        <textarea
                            className={
                                'border border-white/10 focus:border-muted rounded-lg bg-secondary focus:outline-none px-3 py-2 text-sm'
                            }
                            name="caption"
                            id="caption"
                            cols={30}
                            rows={8}
                        />
                    </div>

                    <div className={'flex flex-col space-y-2'}>
                        <label htmlFor="caption">Add Photos</label>
                        <div
                            className={
                                'border border-white/10 rounded-lg bg-secondary focus:outline-none px-3 text-sm cursor-pointer py-40'
                            }
                        >
                            <div
                                className={
                                    'flex flex-col items-center justify-center space-y-4'
                                }
                            >
                                <UploadImageIcon
                                    className={'text-muted w-20 h-auto'}
                                />
                                <p>Drag photo here</p>
                                <span>SVG, PNG, JPG</span>
                                <button
                                    className={
                                        'text-white text-center px-5 py-3 bg-surface rounded-lg cursor-pointer'
                                    }
                                >
                                    Select from computer
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={'flex flex-col space-y-2'}>
                        <label htmlFor="caption">Add Location</label>
                        <input
                            className={
                                'border border-white/10 focus:border-muted rounded-lg bg-secondary focus:outline-none px-3 py-3 text-sm'
                            }
                            name="location"
                            id="location"
                        />
                    </div>

                    <div className={'flex flex-col space-y-2'}>
                        <label htmlFor="caption">
                            Add Tags (separated by comma " , ")
                        </label>
                        <input
                            className={
                                'border border-white/10 focus:border-muted rounded-lg bg-secondary focus:outline-none px-3 py-3 text-sm'
                            }
                            name="location"
                            id="location"
                        />
                    </div>

                    <div className={'flex items-center justify-end space-x-4'}>
                        <button
                            className={
                                'py-3 px-6 bg-surface hover:bg-surface/80 transition-colors text-white cursor-pointer rounded-lg'
                            }
                            type={'button'}
                        >
                            Cancel
                        </button>
                        <Button
                            type={'submit'}
                            label={'Create Post'}
                            className={'py-3'}
                        />
                    </div>
                </form>
            </BaseContainer>
        </AppLayout>
    );
}
