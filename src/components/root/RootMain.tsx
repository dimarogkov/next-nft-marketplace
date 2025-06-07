import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const RootMain: FC<Props> = ({ children }) => {
    return (
        <main className='relative flex flex-col grow w-full section-padding-bottom pt-[70px] sm:pt-20 lg:pt-[100px]'>
            {children}
        </main>
    );
};

export default RootMain;
