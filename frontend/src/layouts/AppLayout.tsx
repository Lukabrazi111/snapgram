import HomeIcon from '@/components/icons/HomeIcon';
import UserProfile from '@/components/UserProfile';
import ExploreIcon from '@/components/icons/ExploreIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import { Link, NavLink } from 'react-router-dom';
import PeopleIcon from '@/components/icons/PeopleIcon';
import SavedIcon from '@/components/icons/SavedIcon';
import CreatePostIcon from '@/components/icons/CreatePostIcon';
import { useAuthUserStore, type User } from '@/stores/authUserStore.tsx';
import type { ReactNode } from 'react';
import axios from '@/configs/axios';
import type { AxiosError } from 'axios';

export default function AppLayout({ children }: { children: ReactNode }) {
    const user: User = useAuthUserStore((state) => state.user);
    const logoutUser = useAuthUserStore((state) => state.logout);

    const logout = async () => {
        try {
            const response = await axios.post('/logout');

            if (response.status === 200) {
                logoutUser();
            }
        } catch (error) {
            const err = error as AxiosError;
            const message = err?.message;
            console.error(message);
        }
    };

    return (
        <main className="flex text-white min-h-screen">
            <aside className="w-72 h-screen px-5 py-10 bg-main shrink-0 sticky top-0">
                <nav className="flex h-full flex-col">
                    <div className="space-y-10">
                        <div>
                            <Link to={'/'}>
                                <img src="/images/logo.svg" alt="logo" />
                            </Link>
                        </div>
                        <div>
                            <Link to={'/profile'}>
                                <UserProfile
                                    name={user.name}
                                    username={user.username}
                                    image={
                                        user.image
                                            ? user.image
                                            : '/images/profile.png'
                                    }
                                />
                            </Link>
                        </div>
                        <ul className="space-y-5">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-5 rounded py-4 transition-colors ease-out ${isActive ? 'bg-primary' : 'hover:bg-primary group'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <HomeIcon
                                                className={
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-primary group-hover:text-white transition-colors'
                                                }
                                            />
                                            <span>Home</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/explore"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-5 rounded py-4 transition-colors ease-out ${isActive ? 'bg-primary' : 'hover:bg-primary group'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <ExploreIcon
                                                className={
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-primary group-hover:text-white transition-colors'
                                                }
                                            />
                                            <span>Explore</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/people"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-5 rounded py-4 transition-colors ease-out ${isActive ? 'bg-primary' : 'hover:bg-primary group'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <PeopleIcon
                                                className={
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-primary group-hover:text-white transition-colors'
                                                }
                                            />
                                            <span>People</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/saved"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-5 rounded py-4 transition-colors ease-out ${isActive ? 'bg-primary' : 'hover:bg-primary group'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <SavedIcon
                                                className={
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-primary group-hover:text-white transition-colors'
                                                }
                                            />
                                            <span>Saved</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/create-post"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-5 rounded py-4 transition-colors ease-out ${isActive ? 'bg-primary' : 'hover:bg-primary group'}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <CreatePostIcon
                                                className={
                                                    isActive
                                                        ? 'text-white'
                                                        : 'text-primary group-hover:text-white transition-colors'
                                                }
                                            />
                                            <span>Create Post</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <button
                            onClick={logout}
                            type={'button'}
                            className="group flex items-center space-x-3 px-5 py-4 hover:bg-red-500/20 rounded transition-colors w-full cursor-pointer"
                        >
                            <LogoutIcon className="text-red-400 group-hover:text-red-300" />
                            <span>Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>
            {children}
        </main>
    );
}
