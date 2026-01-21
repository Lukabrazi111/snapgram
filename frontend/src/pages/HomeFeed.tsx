import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import AppLayout from '@/layouts/AppLayout';
import BaseContainer from '@/components/BaseContainer';
import PageTitle from '@/components/ui/PageTitle.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import LikeButtonIcon from '@/components/icons/LikeButtonIcon.tsx';
import SavedIcon from '@/components/icons/SavedIcon.tsx';

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
            <section className={'flex justify-between w-full'}>
                <BaseContainer>
                    <div className={'w-full max-w-[650px] mx-auto'}>
                        {/* Header title */}
                        <PageTitle title={'Home Feed'} />

                        {/* Posts list */}
                        <div className="mt-10 border border-white/10 rounded-lg px-8 py-6 bg-main w-full max-w-[650px] space-y-4">
                            <div className="flex items-center justify-between">
                                <div className={'flex items-center space-x-3'}>
                                    <div>
                                        <img
                                            src="/images/profile.png"
                                            alt="user-profile"
                                            className="w-14 h-14 rounded-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white whitespace-nowrap font-bold">
                                            John Doe
                                        </span>
                                        <div className="text-sm text-muted">
                                            2 hours ago • Mountain Trail,
                                            Colorado
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <EditButtonIcon
                                        className={
                                            'text-primary cursor-pointer'
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <p className={'text-white'}>
                                    Just finished an amazing hike! The view was
                                    absolutely breathtaking. Nature never fails
                                    to amaze me. 🌲⛰️
                                </p>
                            </div>

                            <div className={'flex items-center space-x-1'}>
                                <span className={'text-muted text-sm'}>
                                    #nature
                                </span>
                                <span className={'text-muted text-sm'}>
                                    #nature
                                </span>
                                <span className={'text-muted text-sm'}>
                                    #nature
                                </span>
                                <span className={'text-muted text-sm'}>
                                    #nature
                                </span>
                                <span className={'text-muted text-sm'}>
                                    #nature
                                </span>
                            </div>

                            <div className={'w-full'}>
                                <img
                                    src="/images/nature.jpg"
                                    alt="post-image"
                                    className={'rounded-xl'}
                                />
                            </div>

                            <div
                                className={'flex items-center justify-between'}
                            >
                                <div className={'flex items-center space-x-2'}>
                                    <LikeButtonIcon
                                        className={
                                            'text-primary cursor-pointer'
                                        }
                                    />
                                    <span className={'text-white font-bold'}>
                                        1
                                    </span>
                                </div>
                                <div>
                                    <SavedIcon
                                        className={
                                            'text-primary cursor-pointer'
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1>Here</h1>
                        </div>
                    </div>
                </BaseContainer>

                <div
                    className={
                        'mt-10 w-full max-w-[250px] xl:max-w-[280px] 2xl:max-w-[450px] hidden lg:block shrink-0 sticky top-10 self-start pr-5'
                    }
                >
                    <PageTitle title={'Top Creators'} />

                    <div
                        className={
                            'mt-10 grid grid-cols-1 2xl:grid-cols-2 gap-4'
                        }
                    >
                        <div
                            className={
                                'flex flex-col items-center py-6 px-4 xl:px-6 2xl:px-8 space-y-2 border border-white/10 rounded-lg'
                            }
                        >
                            <img
                                src="/images/profile.png"
                                alt="user-profile"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <p className="text-sm xl:text-base text-center">
                                Alex Johnson
                            </p>
                            <span className={'text-muted text-xs xl:text-sm'}>
                                @alexj
                            </span>
                            <button
                                className={
                                    'mt-2 bg-primary hover:bg-primary/80 transition-colors text-white text-sm font-bold px-4 py-2 rounded-lg cursor-pointer'
                                }
                            >
                                Follow
                            </button>
                        </div>
                        <div
                            className={
                                'flex flex-col items-center py-6 px-4 xl:px-6 2xl:px-8 space-y-2 border border-white/10 rounded-lg'
                            }
                        >
                            <img
                                src="/images/profile.png"
                                alt="user-profile"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <p className="text-sm xl:text-base text-center">
                                Alex Johnson
                            </p>
                            <span className={'text-muted text-xs xl:text-sm'}>
                                @alexj
                            </span>
                            <button
                                className={
                                    'mt-2 bg-primary hover:bg-primary/80 transition-colors text-white text-sm font-bold px-4 py-2 rounded-lg cursor-pointer'
                                }
                            >
                                Follow
                            </button>
                        </div>
                    </div>
                </div>

                <ToastContainer transition={Slide} closeOnClick={true} />
            </section>
        </AppLayout>
    );
}
