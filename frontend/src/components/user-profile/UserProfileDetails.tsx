export default function UserProfileDetails({
    name,
    username,
    image,
}: {
    name: string;
    username: string;
    image: string;
}) {
    return (
        <div className={'flex space-x-4'}>
            <div>
                <img
                    src={image ? image : '/images/profile.png'}
                    alt="profile-image"
                    className={'w-36 h-36 object-center object-cover'}
                />
            </div>

            <div className={'flex flex-col space-y-4 mt-5'}>
                <div className={'space-y-1'}>
                    <h1 className={'text-white font-bold text-3xl'}>{name}</h1>
                    <span className={'text-muted'}>@{username}</span>
                </div>

                <div className={'flex items-center space-x-10 mt-4'}>
                    <div className={'flex items-center space-x-2'}>
                        <span className={'text-primary font-bold text-lg'}>
                            2
                        </span>
                        <p>Posts</p>
                    </div>
                    <div className={'flex items-center space-x-2'}>
                        <span className={'text-primary font-bold text-lg'}>
                            20
                        </span>
                        <p>Followers</p>
                    </div>
                    <div className={'flex items-center space-x-2'}>
                        <span className={'text-primary font-bold text-lg'}>
                            35
                        </span>
                        <p>Following</p>
                    </div>
                </div>

                <div>
                    <p className={'font-bold text-white'}>
                        Photography enthusiast | Travel lover | Coffee addict ☕
                    </p>
                </div>
            </div>
        </div>
    );
}
