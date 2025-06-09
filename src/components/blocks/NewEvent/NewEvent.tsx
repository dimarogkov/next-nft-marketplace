import { getNftByQuery } from '@/src/services';
import { NewEventContent, NewEventInfo, Timer } from '../../elements';
import { ImageLoader } from '../../ui';

const NewEvent = async () => {
    const { img, name, collectionName, description, author, price, highestBid } = await getNftByQuery(
        'name',
        'Whispering Blooms'
    );

    const content = { name, collectionName, description, author };
    const infoContent = { collectionName, price, highestBid };

    return (
        <section className='relative hidden md:block w-full section-padding'>
            <div className='container'>
                <div className='grid md:grid-cols-[2fr,1fr] gap-4 sm:gap-5 w-full'>
                    <div className='grid md:grid-rows-[2fr,1fr] gap-4 sm:gap-5'>
                        <NewEventContent content={content} />
                        <NewEventInfo content={infoContent} />
                    </div>

                    <div className='relative flex flex-col gap-4 sm:gap-5 w-full'>
                        <ImageLoader className='!pb-[120%] rounded-lg overflow-hidden'>
                            <ImageLoader.Image src={img.src} alt={img.alt} />
                        </ImageLoader>

                        <Timer hours={6} className='!w-full !max-w-full rounded-lg bg-gray' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewEvent;
