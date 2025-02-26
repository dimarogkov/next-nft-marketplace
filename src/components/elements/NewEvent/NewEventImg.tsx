import Image from 'next/image';

const NewEventImg = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full'>
            <Image
                src={'/new_event_img.jpg'}
                blurDataURL={'/new_event_img.jpg'}
                alt={'magic_mushrooms'}
                placeholder='blur'
                className='img'
                sizes='100%'
                fill
            />

            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple to-transparent' />
        </div>
    );
};

export default NewEventImg;
