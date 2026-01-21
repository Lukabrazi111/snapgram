import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import AppLayout from '@/layouts/AppLayout';
import BaseContainer from '@/components/BaseContainer';
import PageTitle from '@/components/ui/PageTitle.tsx';
import PostList from '@/components/home-feed/PostList.tsx';
import TopCreatorsList from '@/components/home-feed/TopCreatorsList.tsx';

export default function HomeFeed() {
    const location = useLocation();

    useEffect(() => {
        const message = location?.state?.message;

        if (message) {
            toast.success(message);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <AppLayout>
            <section className={'flex justify-between w-full space-x-2'}>
                <div
                    className={
                        'flex justify-between w-full h-[calc(100vh-0px)] overflow-y-auto custom-scrollbar'
                    }
                >
                    <BaseContainer>
                        <div className={'w-full max-w-[650px] mx-auto'}>
                            {/* Header title */}
                            <PageTitle title={'Home Feed'} />

                            {/* Posts items */}
                            <PostList />
                        </div>
                    </BaseContainer>
                </div>

                <div
                    className={
                        'mt-10 w-full max-w-[250px] xl:max-w-[280px] 2xl:max-w-[450px] hidden lg:block shrink-0 sticky top-10 self-start pr-5'
                    }
                >
                    <PageTitle title={'Top Creators'} />

                    <TopCreatorsList />
                </div>

                <ToastContainer transition={Slide} closeOnClick={true} />
            </section>
        </AppLayout>
    );
}
