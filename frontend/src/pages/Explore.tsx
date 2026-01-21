import AppLayout from '@/layouts/AppLayout.tsx';
import PageTitle from '@/components/ui/PageTitle.tsx';
import BaseContainer from '@/components/BaseContainer';
import SearchIcon from '@/components/icons/SearchIcon.tsx';

export default function Explore() {
    return (
        <AppLayout>
            <BaseContainer>
                <PageTitle title={'Explore'} />

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
            </BaseContainer>
        </AppLayout>
    );
}
