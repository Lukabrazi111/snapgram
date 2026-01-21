export default function TopCreatorsItem() {
    return (
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
            <p className="text-sm xl:text-base text-center">Alex Johnson</p>
            <span className={'text-muted text-xs xl:text-sm'}>@alexj</span>
            <button
                className={
                    'mt-2 bg-primary hover:bg-primary/80 transition-colors text-white text-sm font-bold px-4 py-2 rounded-lg cursor-pointer'
                }
            >
                Follow
            </button>
        </div>
    );
}
