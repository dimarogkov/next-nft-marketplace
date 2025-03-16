import { FC, ReactNode } from 'react';
import { Footer, Header } from '../blocks';
import Lenis from './Lenis';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <Lenis>
            <Header />
            <main className='relative flex flex-col grow w-full pt-[70px] sm:pt-20 lg:pt-[100px]'>{children}</main>
            <Footer />
        </Lenis>
    );
};

export default RootLayout;
