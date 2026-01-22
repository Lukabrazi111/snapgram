import AppLayout from '@/layouts/AppLayout.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import BaseContainer from '@/components/BaseContainer';
import SearchIcon from '@/components/icons/SearchIcon.tsx';
import FilterIcon from '@/components/icons/FilterIcon.tsx';
import ExplorePostList from '@/components/explore/ExplorePostList.tsx';
import { useEffect, useRef, useState } from 'react';

export default function ExplorePage() {
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
    const filterMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                filterMenuRef.current &&
                !filterMenuRef.current.contains(e.target as Node)
            ) {
                setIsOpenFilter(false);
            }
        };

        if (isOpenFilter) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenFilter]);

    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'ExplorePage'} />

                <div className={'relative bg-surface rounded-lg mt-10'}>
                    <SearchIcon
                        className={
                            'absolute left-3.5 text-muted transform translate-y-3'
                        }
                    />
                    <input
                        type="text"
                        placeholder={'Search'}
                        className={
                            'py-3 pr-5 pl-14 w-full focus:outline-none placeholder:text-muted placeholder:font-light rounded-lg'
                        }
                    />
                </div>

                <div className={'mt-14'}>
                    <div className={'flex items-center justify-between'}>
                        <h1 className={'text-2xl font-bold text-white'}>
                            Popular Today
                        </h1>
                        <div
                            onClick={() => setIsOpenFilter((prev) => !prev)}
                            ref={filterMenuRef}
                            className={`bg-surface px-5 py-2 flex items-center cursor-pointer relative ${isOpenFilter ? 'rounded-t-lg' : 'rounded-lg'}`}
                        >
                            <span className={'mr-3'}>All</span>
                            <FilterIcon className={'text-muted w-5 h-auto'} />

                            {isOpenFilter && (
                                <ul
                                    className={
                                        'text-center absolute top-full left-0 w-full bg-surface rounded-b-lg overflow-hidden'
                                    }
                                >
                                    <li
                                        className={
                                            'hover:bg-muted py-2 text-nowrap cursor-pointer'
                                        }
                                    >
                                        option 1
                                    </li>
                                    <li
                                        className={
                                            'hover:bg-muted py-2 text-nowrap cursor-pointer'
                                        }
                                    >
                                        option 2
                                    </li>
                                    <li
                                        className={
                                            'hover:bg-muted py-2 text-nowrap cursor-pointer'
                                        }
                                    >
                                        option 3
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className={'mt-10'}>
                    <ExplorePostList />
                </div>
            </BaseContainer>
        </AppLayout>
    );
}
