interface UserProfileProps {
    name: string;
    username: string;
    image: string;
}

export default function UserProfile({
    name,
    username,
    image,
}: UserProfileProps) {
    return (
        <div className="flex items-center space-x-3">
            <div>
                <img
                    src={image ? image : '/images/profile.png'}
                    alt="user-profile"
                    className="w-16 h-16 rounded-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-white whitespace-nowrap font-bold">
                    {name}
                </span>
                <span className="text-sm text-muted">@{username}</span>
            </div>
        </div>
    );
}
