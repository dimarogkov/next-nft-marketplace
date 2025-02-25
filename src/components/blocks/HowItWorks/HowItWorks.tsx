import { HOW_IT_WORKS_DATA } from '@/src/variables/data';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { HowItWorksCard } from '../../elements';
import { Text, Title } from '../../ui';

const HowItWorks = () => {
    const { title, text, items } = HOW_IT_WORKS_DATA;

    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='w-full mb-5 md:mb-6 lg:mb-[30px] last:mb-0'>
                    <Title titleType={EnumTitle.h3} className='mb-1 last:mb-0'>
                        {title}
                    </Title>

                    <Text textType={EnumText.large}>{text}</Text>
                </div>

                <div className='grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px] w-full'>
                    {items.map((item) => (
                        <HowItWorksCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
