import AppLayout from '@/layouts/AppLayout.tsx';
import BaseContainer from '@/components/BaseContainer.tsx';
import GoBackIcon from '@/components/icons/GoBackIcon.tsx';
import { useNavigate } from 'react-router-dom';
import PostItemLayout from '@/layouts/PostItemLayout.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import TrashIcon from '@/components/icons/TrashIcon.tsx';
import LikeButtonIcon from '@/components/icons/LikeButtonIcon.tsx';
import SavedIcon from '@/components/icons/SavedIcon.tsx';

export default function PostPage() {
    const navigate = useNavigate();

    return (
        <AppLayout>
            <BaseContainer>
                <button
                    onClick={() => navigate(-1)}
                    className={
                        'flex items-center space-x-4 cursor-pointer p-3 group transition-colors'
                    }
                >
                    <GoBackIcon
                        className={
                            'group-hover:text-primary text-muted transition-colors'
                        }
                    />
                    <span className={'font-bold'}>Back</span>
                </button>

                <section className={'mt-10 mb-14'}>
                    <PostItemLayout>
                        <div className={'grid grid-cols-2 space-x-10'}>
                            <div className="h-[450px]">
                                <img
                                    src="/images/nature.jpg"
                                    alt="post-image"
                                    className="w-full h-full object-cover object-center rounded-lg"
                                />
                            </div>
                            {/* Post info */}
                            <div
                                className={
                                    'flex flex-col space-x-3 py-4 w-full'
                                }
                            >
                                <div
                                    className={
                                        'flex items-center space-x-4 pb-4'
                                    }
                                >
                                    <img
                                        className={
                                            'object-cover object-center w-14 h-14'
                                        }
                                        src="/images/profile.png"
                                        alt="profile-image"
                                    />
                                    <div
                                        className={
                                            'flex justify-between flex-1'
                                        }
                                    >
                                        <div>
                                            <h1
                                                className={
                                                    'font-bold text-white text-lg'
                                                }
                                            >
                                                Alex Johnson
                                            </h1>
                                            <span
                                                className={'text-sm text-muted'}
                                            >
                                                2 hours ago • Mountain Trail,
                                                Colorado
                                            </span>
                                        </div>
                                        <div
                                            className={
                                                'flex items-center space-x-2 self-start'
                                            }
                                        >
                                            <div
                                                className={
                                                    'py-4 px-3 cursor-pointer'
                                                }
                                            >
                                                <EditButtonIcon
                                                    className={'text-primary'}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    'py-3 px-3 cursor-pointer transition-colors hover:bg-white rounded-xl duration-200'
                                                }
                                            >
                                                <TrashIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Post description */}
                                <div className={'border-t-2 border-[#1B1B1D]'}>
                                    <div className={'mt-5 space-y-3'}>
                                        <p>
                                            Just finished an amazing hike! The
                                            view was absolutely breathtaking.
                                            Nature never fails to amaze me. 🌲⛰️
                                        </p>

                                        <div
                                            className={
                                                'flex flex-wrap text-muted space-x-2 text-sm'
                                            }
                                        >
                                            <span>#nature</span>
                                            <span>#hiking</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Like & Save bookmark icons */}
                                <div
                                    className={
                                        'flex items-center justify-between mt-auto'
                                    }
                                >
                                    <div
                                        className={
                                            'flex items-center space-x-2'
                                        }
                                    >
                                        <LikeButtonIcon />
                                        <span>3</span>
                                    </div>
                                    <div>
                                        <SavedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PostItemLayout>

                    <div className={'mt-10 border-t-2 border-[#1B1B1D] pt-7'}>
                        <h1 className={'text-2xl text-white font-bold'}>
                            More Related Posts
                        </h1>

                        <div className={'grid grid-cols-3 gap-5 mt-6'}>
                            <div
                                className={
                                    'w-full rounded-xl overflow-hidden group h-80'
                                }
                            >
                                <img
                                    src="/images/food2.jpg"
                                    alt="post-image"
                                    className={
                                        'w-full h-80 object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer'
                                    }
                                />
                                <div
                                    className={
                                        'flex items-center justify-between transform -translate-y-12 px-4'
                                    }
                                >
                                    <div
                                        className={
                                            'flex items-center text-white space-x-3'
                                        }
                                    >
                                        <img
                                            src="/images/profile.png"
                                            alt="user-profile"
                                            className={'w-9 h-auto'}
                                        />
                                        <span>John Doe</span>
                                    </div>
                                    <div
                                        className={
                                            'flex items-center space-x-3'
                                        }
                                    >
                                        <div
                                            className={
                                                'flex items-center text-white space-x-1'
                                            }
                                        >
                                            <LikeButtonIcon />
                                            <span>2</span>
                                        </div>
                                        <SavedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </BaseContainer>
        </AppLayout>
    );
}
