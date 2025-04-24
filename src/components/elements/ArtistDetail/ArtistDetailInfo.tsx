import { FC } from 'react';
import { EnumColorStyle, EnumText, EnumTitle } from '@/src/types/enums';
import { IArtistInfo } from '@/src/types/interfaces/Artist';
import { SocialLink, Text, Title } from '../../ui';
import { Facebook, Instagram, Twitter } from 'lucide-react';

type Props = {
    info: IArtistInfo;
};

const ArtistDetailInfo: FC<Props> = ({ info }) => {
    const { volume, sales, followers, links } = info;

    const SocialIcon = {
        ['facebook' as string]: Facebook,
        ['twitter' as string]: Twitter,
        ['instagram' as string]: Instagram,
    };

    return (
        <>
            <div className='relative grid grid-cols-3 gap-4 w-full'>
                <div className='w-full'>
                    <Title titleType={EnumTitle.h4} className='font-semibold text-white'>
                        {volume}
                    </Title>

                    <Text textType={EnumText.large}>Volume</Text>
                </div>

                <div className='w-full'>
                    <Title titleType={EnumTitle.h4} className='font-semibold text-white'>
                        {sales}
                    </Title>

                    <Text textType={EnumText.large}>NFTs Sold</Text>
                </div>

                <div className='w-full'>
                    <Title titleType={EnumTitle.h4} className='font-semibold text-white'>
                        {followers}
                    </Title>

                    <Text textType={EnumText.large}>Followers</Text>
                </div>
            </div>

            <div className='w-full'>
                <Text textType={EnumText.large} className='mb-2 last:mb-0'>
                    Links
                </Text>

                <div className='flex gap-1.5 w-full'>
                    {links.map(({ id, href }) => (
                        <SocialLink key={id} href={href} icon={SocialIcon[id]} socialType={EnumColorStyle.gray} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ArtistDetailInfo;
