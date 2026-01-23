import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import * as React from 'react';
import { useRef } from 'react';
import InputField from '@/components/ui/InputField.tsx';
import TextAreaField from '@/components/ui/TextAreaField.tsx';

export default function ProfileEditPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            // Handle the selected file
            console.log('Selected file', file);
        }
    };

    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Edit Profile'} icon={<EditButtonIcon />} />

                <section className={'mt-10'}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept={'image/*,.png,.jpeg,.jpg'}
                        hidden
                        onChange={handleFileChange}
                    />
                    <div
                        onClick={handleImageClick}
                        className="cursor-pointer flex items-center space-x-4"
                    >
                        <img
                            src="/images/profile.png"
                            alt="user-image"
                            className={'w-28'}
                        />
                        <div className={'flex flex-col space-y-2'}>
                            <span>Alex Johnson</span>
                            <span className={'text-primary font-bold text-sm'}>
                                Change profile image
                            </span>
                        </div>
                    </div>

                    <div className={'mt-10 space-y-6'}>
                        <InputField
                            label={'Name'}
                            id={'name'}
                            name={'name'}
                            type={'text'}
                        />
                        <InputField
                            label={'Username'}
                            disabled={true}
                            id={'username'}
                            name={'username'}
                            type={'text'}
                        />
                        <InputField
                            label={'Email'}
                            disabled={true}
                            id={'email'}
                            name={'email'}
                            type={'text'}
                        />
                        <TextAreaField label={'Bio'} name={'bio'} id={'bio'} />
                    </div>
                </section>
            </BaseContainer>
        </AppLayout>
    );
}
