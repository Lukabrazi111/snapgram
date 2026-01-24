import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import CreatePostIcon from '@/components/icons/CreatePostIcon.tsx';
import UploadImageIcon from '@/components/icons/UploadImageIcon.tsx';
import Button from '@/components/ui/Button.tsx';
import InputField from '@/components/ui/InputField.tsx';
import TextAreaField from '@/components/ui/TextAreaField.tsx';

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
                        <TextAreaField
                            label={'Caption'}
                            name={'caption'}
                            id={'caption'}
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
                        <InputField
                            label={'Add Location'}
                            id={'location'}
                            name={'location'}
                            type={'text'}
                        />
                    </div>

                    <div className={'flex flex-col space-y-2'}>
                        <InputField
                            label={'Add Tags (separated by comma " , ")'}
                            id={'tags'}
                            name={'tags'}
                            type={'text'}
                            placeholder={'Art, Expression, Learn'}
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
