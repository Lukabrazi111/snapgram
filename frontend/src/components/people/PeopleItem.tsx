import Button from '@/components/ui/Button.tsx';

export default function PeopleItem({
    name,
    username,
    userImage,
}: {
    name: string;
    username: string;
    userImage: string;
}) {
    return (
        <div
            className={
                'flex flex-col items-center py-7 px-4 xl:px-6 2xl:px-8 space-y-2 border border-white/10 rounded-lg'
            }
        >
            <img
                src={userImage}
                alt="user-profile"
                className="w-14 h-14 rounded-full object-cover"
            />
            <p className="text-sm xl:text-base text-center">{name}</p>
            <span className={'text-muted text-xs xl:text-sm'}>@{username}</span>

            <Button label={'Follow'} type={'button'} className={'mt-2'} />
        </div>
    );
}
