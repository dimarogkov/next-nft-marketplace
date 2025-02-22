import { FC, ReactNode } from 'react';
import { Header } from '../blocks';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />

            <main className='relative flex flex-col grow w-full max-w-[1064px] pt-[70px] sm:pt-20 lg:pt-[100px] px-4 md:px-5 m-auto'>
                {children}
            </main>
        </>
    );
};

export default RootLayout;
