export default function SavedPostItem({
    name,
    userImage,
    postImage,
}: {
    name: string;
    userImage: string;
    postImage: string;
}) {
    return (
        <div className={'w-full rounded-xl overflow-hidden group h-80'}>
            <img
                src={postImage}
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
                        src={userImage}
                        alt="user-profile"
                        className={'w-9 h-auto'}
                    />
                    <span>{name}</span>
                </div>
            </div>
        </div>
    );
}
