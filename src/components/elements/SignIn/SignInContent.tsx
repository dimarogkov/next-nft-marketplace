import { EnumText, EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../../ui';

const SignInContent = () => {
    return (
        <div className='relative w-full'>
            <Title titleType={EnumTitle.h2} className='mb-2 md:mb-3 last:mb-0'>
                Welcome to the Marketplace
            </Title>

            <Text textType={EnumText.large} className='md:w-[90%]'>
                Join our vibrant community and create, buy, or sell remarkable NFTs.
            </Text>
        </div>
    );
};

export default SignInContent;
