import { FC, ReactNode } from 'react';
import { Header } from '../elements';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='relative w-full max-w-[1064px] px-5 m-auto'>{children}</main>
        </>
    );
};

export default RootLayout;
