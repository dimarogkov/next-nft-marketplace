import Image from 'next/image';
import { CLIENTS_DATA } from '@/src/variables';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../../ui';
import cn from 'classnames';

const Clients = () => {
    return (
        <section className='relative w-full section-padding'>
            <div className='container'>
                <div className='w-full rounded-lg p-2 sm:p-4 md:p-5 pt-8 sm:pt-10 md:pt-12 bg-gray'>
                    <div className='w-full sm:w-[90%] lg:w-[80%] text-center m-auto mb-8 sm:mb-10 md:mb-12 last:mb-0'>
                        <Title titleType={EnumTitle.h3} className='mb-2 md:mb-3 last:mb-0'>
                            Our Great Clients
                        </Title>

                        <Text textType={EnumText.large}>
                            Startup includes great form options for your startup projects. Each component is coded for
                            web which makes creating a website quick and easy.
                        </Text>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full'>
                        {CLIENTS_DATA.map(({ src, alt, sizeType }, index) => (
                            <div
                                key={alt}
                                className={cn(
                                    'relative group flex items-center justify-center w-full h-[90px] md:h-[100px] rounded-lg border border-black',
                                    {
                                        'hidden md:flex': index > 5 && index < 8,
                                        'hidden lg:flex': index > 7,
                                    }
                                )}
                            >
                                <Image
                                    src={src}
                                    alt={alt}
                                    sizes='100%'
                                    fill
                                    className={cn('!relative !w-auto opacity-70', {
                                        '!h-11': sizeType === 3,
                                        '!h-7 sm:!h-8': sizeType === 2,
                                        '!h-5': sizeType === 1,
                                    })}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
