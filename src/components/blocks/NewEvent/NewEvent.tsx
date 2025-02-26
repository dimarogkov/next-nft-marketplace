import { NTFS_DATA } from '@/src/variables';
import { NewEventContent, NewEventImg } from '../../elements';

const NewEvent = () => {
    const { name, img, author } = NTFS_DATA[0];

    return (
        <section className='relative w-full md:h-[600px] lg:h-[700px] bg-gray'>
            <NewEventImg img={img} />

            <div className='relative flex items-end container h-full py-10 lg:py-[60px] pt-[120px] md:pt-0'>
                <NewEventContent content={{ name, author }} />
            </div>
        </section>
    );
};

export default NewEvent;
