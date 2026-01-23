export default function UserLikedPostItem() {
    return (
        <div className={'w-full rounded-xl overflow-hidden group h-80'}>
            <img
                src={'/images/food1.jpg'}
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
                <div className={'flex items-center text-white space-x-3'}>
                    <img
                        src={'/images/profile.png'}
                        alt="user-profile"
                        className={'w-9 h-9'}
                    />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    );
}
