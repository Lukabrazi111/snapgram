import BaseContainer from '@/components/BaseContainer.tsx';
import UserProfileDetails from '@/components/user-profile/UserProfileDetails.tsx';
import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import AppLayout from '@/layouts/AppLayout.tsx';
import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ImageIcon from '@/components/icons/ImageIcon.tsx';
import LikeButtonIcon from '@/components/icons/LikeButtonIcon.tsx';
import { useAuthUserStore } from '@/stores/authUserStore.tsx';

interface ProfileUser {
    id?: number;
    name: string;
    username: string;
    email?: string;
    image?: string;
}

interface ProfileLayoutProps {
    children: ReactNode;
    user: ProfileUser;
}

export default function ProfileLayout({ children, user }: ProfileLayoutProps) {
    const authUser = useAuthUserStore((state) => state.user);

    const isOwnProfile = authUser?.id === user.id;

    return (
        <AppLayout>
            <BaseContainer>
                <section className={'flex flex-col justify-between'}>
                    <div
                        className={`flex justify-between ${!isOwnProfile && 'mb-10'}`}
                    >
                        <UserProfileDetails
                            name={user.name}
                            username={user.username}
                            image={user.image ?? ''}
                        />

                        {isOwnProfile ? (
                            <Link
                                to={'/profile/edit'}
                                className={
                                    'self-start bg-surface hover:bg-surface/90 transition-colors px-4 py-3 rounded-lg flex items-center space-x-2 cursor-pointer text-sm text-nowrap'
                                }
                            >
                                <EditButtonIcon
                                    className={'text-primary w-5 h-auto'}
                                />
                                <span>Edit Profile</span>
                            </Link>
                        ) : (
                            <button className="self-start bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg text-sm font-semibold">
                                Follow
                            </button>
                        )}
                    </div>

                    {/* Navigation Links */}
                    {isOwnProfile && (
                        <div className={'flex items-center mt-20'}>
                            <NavLink
                                to={'/profile'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center justify-center space-x-3 w-full lg:max-w-52 px-10 py-4 rounded-l-lg ${isActive ? 'bg-secondary' : 'bg-main'}`
                                }
                            >
                                <ImageIcon className={'text-primary w-6 h-6'} />
                                <span>Posts</span>
                            </NavLink>
                            <NavLink
                                to={'/profile/liked-posts'}
                                className={({ isActive }) =>
                                    `flex items-center justify-center space-x-3 w-full lg:max-w-52 px-10 py-4 rounded-r-lg ${isActive ? 'bg-secondary' : 'bg-main'}`
                                }
                            >
                                <LikeButtonIcon
                                    className={'text-primary w-6 h-6'}
                                />
                                <span>Liked Posts</span>
                            </NavLink>
                        </div>
                    )}
                    {children}
                </section>
            </BaseContainer>
        </AppLayout>
    );
}
