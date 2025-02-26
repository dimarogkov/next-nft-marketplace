import { NewEventContent, NewEventImg } from '../../elements';

const NewEvent = () => {
    return (
        <section className='relative w-full h-[700px] bg-gray'>
            <NewEventImg />

            <div className='relative flex items-end container h-full py-[60px]'>
                <NewEventContent />
            </div>
        </section>
    );
};

export default NewEvent;
