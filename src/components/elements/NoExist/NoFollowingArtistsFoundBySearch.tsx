import { FC } from 'react';
import { EnumText, EnumTitle } from '@/src/types/enums';
import { Btn, Text, Title } from '../../ui';
import { Search } from 'lucide-react';

type Props = {
    handleClick: () => void;
};

const NoFollowingArtistsFoundBySearch: FC<Props> = ({ handleClick = () => {} }) => {
    return (
        <div className='relative w-full h-full sm:max-w-[75%] lg:max-w-[50%] text-center m-auto'>
            <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                No Results Found
            </Title>

            <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                Sorry, but we couldn&rsquo;t find any Artists that match your query. Please try again!
            </Text>

            <Btn icon={Search} onClick={handleClick}>
                Search Again
            </Btn>
        </div>
    );
};

export default NoFollowingArtistsFoundBySearch;
