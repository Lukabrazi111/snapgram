import HomeIcon from '@/components/icons/HomeIcon';
import UserProfile from '@/components/UserProfile';
import ExploreIcon from '@/components/icons/ExploreIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import { Link } from 'react-router-dom';
import PeopleIcon from '@/components/icons/PeopleIcon';
import SavedIcon from '@/components/icons/SavedIcon';
import CreatePostIcon from '@/components/icons/CreatePostIcon';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex text-white">
            <aside className="w-72 h-screen px-5 py-10 bg-main shrink-0">
                <nav className="flex h-full flex-col">
                    <div className="space-y-10">
                        <div>
                            <img src="/images/logo.svg" alt="logo" />
                        </div>
                        <UserProfile
                            name="John Doe"
                            username="john_doe"
                            image="/images/profile.png"
                        />
                        <ul className="space-y-5">
                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center space-x-3 px-5 hover:bg-primary rounded py-4 transition-colors ease-out"
                                >
                                    <HomeIcon className="text-primary group-hover:text-white transition-colors" />
                                    <span className="text-lg">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center space-x-3 px-5 hover:bg-primary rounded py-4 transition-colors ease-out"
                                >
                                    <ExploreIcon className="text-primary group-hover:text-white transition-colors" />
                                    <span className="text-lg">Explore</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center space-x-3 px-5 hover:bg-primary rounded py-4 transition-colors ease-out"
                                >
                                    <PeopleIcon className="text-primary group-hover:text-white transition-colors" />
                                    <span className="text-lg">People</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center space-x-3 px-5 hover:bg-primary rounded py-4 transition-colors ease-out"
                                >
                                    <SavedIcon className="text-primary group-hover:text-white transition-colors" />
                                    <span className="text-lg">Saved</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center space-x-3 px-5 hover:bg-primary rounded py-4 transition-colors ease-out"
                                >
                                    <CreatePostIcon className="text-primary group-hover:text-white transition-colors" />
                                    <span className="text-lg">Create Post</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <Link
                            to="/logout"
                            className="group flex items-center space-x-3 px-5 py-4"
                        >
                            <LogoutIcon className="text-primary" />
                            <span className="text-lg">Logout</span>
                        </Link>
                    </div>
                </nav>
            </aside>
            {children}
        </main>
    );
}
