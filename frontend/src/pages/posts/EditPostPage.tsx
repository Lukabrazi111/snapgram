import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import TextAreaField from '@/components/ui/TextAreaField.tsx';
import { useRef } from 'react';
import InputField from '@/components/ui/InputField.tsx';
import Button from '@/components/ui/Button.tsx';

export default function EditPostPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        fileInputRef?.current?.click();
    };

    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Edit Post'} icon={<EditButtonIcon />} />

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

                    <div
                        className={
                            'bg-secondary pt-8 pb-4 px-10 cursor-pointer rounded-lg'
                        }
                        onClick={handleImageClick}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            accept={'image/*,.png,.jpeg,.jpg'}
                            hidden
                        />

                        <div className={'w-full'}>
                            <img
                                src="/images/nature.jpg"
                                alt="post-image"
                                className={
                                    'w-full rounded-4xl object-cover object-center'
                                }
                            />
                        </div>

                        <div
                            className={
                                'border-t-[#1D1D1D] border-t-2 text-center mt-8 pt-4'
                            }
                        >
                            <span className={'text-muted'}>
                                Click or drag photo to replace
                            </span>
                        </div>
                    </div>

                    <div>
                        <InputField
                            label={'Add Location'}
                            name={'location'}
                            id={'location'}
                        />
                    </div>

                    <div>
                        <InputField
                            label={'Add Tags (separated by comma " , ")'}
                            name={'tags'}
                            id={'tags'}
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
                            label={'Update Post'}
                            className={'py-3'}
                        />
                    </div>
                </form>
            </BaseContainer>
        </AppLayout>
    );
}
