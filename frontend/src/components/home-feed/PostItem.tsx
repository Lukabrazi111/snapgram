import EditButtonIcon from '@/components/icons/EditButtonIcon.tsx';
import LikeButtonIcon from '@/components/icons/LikeButtonIcon.tsx';
import SavedIcon from '@/components/icons/SavedIcon.tsx';

export default function PostItem() {
    return (
        <div className="border border-white/10 rounded-lg px-8 py-6 bg-main w-full max-w-[650px] space-y-4">
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
                            2 hours ago • Mountain Trail, Colorado
                        </div>
                    </div>
                </div>

                <div>
                    <EditButtonIcon className={'text-primary cursor-pointer'} />
                </div>
            </div>

            <div>
                <p className={'text-white'}>
                    Just finished an amazing hike! The view was absolutely
                    breathtaking. Nature never fails to amaze me. 🌲⛰️
                </p>
            </div>

            <div className={'flex items-center space-x-1'}>
                <span className={'text-muted text-sm'}>#nature</span>
                <span className={'text-muted text-sm'}>#nature</span>
                <span className={'text-muted text-sm'}>#nature</span>
                <span className={'text-muted text-sm'}>#nature</span>
                <span className={'text-muted text-sm'}>#nature</span>
            </div>

            <div className={'w-full'}>
                <img
                    src="/images/nature.jpg"
                    alt="post-image"
                    className={'rounded-xl'}
                />
            </div>

            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center space-x-2'}>
                    <LikeButtonIcon />
                    <span className={'text-white font-bold'}>1</span>
                </div>
                <div>
                    <SavedIcon />
                </div>
            </div>
        </div>
    );
}
