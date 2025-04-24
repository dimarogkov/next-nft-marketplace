import { FC } from 'react';
import { EnumColorStyle, EnumText } from '@/src/types/enums';
import { IArtistInfo } from '@/src/types/interfaces/Artist';
import { HeroInfoItem } from '../Hero';
import { SocialLink, Text } from '../../ui';
import { Facebook, Instagram, Twitter } from 'lucide-react';

type Props = {
    info: IArtistInfo;
};

const ArtistDetailInfo: FC<Props> = ({ info }) => {
    const { volume, sales, followers, links } = info;

    const infoArr = [
        { value: volume, text: 'Volume' },
        { value: sales, text: 'NFTs Sold' },
        { value: followers, text: 'Followers' },
    ];

    const SocialIcon = {
        ['facebook' as string]: Facebook,
        ['twitter' as string]: Twitter,
        ['instagram' as string]: Instagram,
    };

    return (
        <>
            <div className='relative grid grid-cols-3 gap-4 w-full'>
                {infoArr.map((info) => (
                    <div key={info.text} className='w-full'>
                        <HeroInfoItem info={info} />
                    </div>
                ))}
            </div>

            <div className='w-full'>
                <Text textType={EnumText.large} className='mb-2 last:mb-0'>
                    Links
                </Text>

                <div className='flex gap-2 w-full'>
                    {links.map(({ id, href }) => (
                        <SocialLink key={id} href={href} icon={SocialIcon[id]} socialType={EnumColorStyle.gray} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ArtistDetailInfo;
