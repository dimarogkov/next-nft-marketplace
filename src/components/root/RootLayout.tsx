import { FC, ReactNode } from 'react';
import { Header } from '../blocks';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    const mainClasses = 'relative flex flex-col grow w-full max-w-[1064px] px-4 sm:px-5 m-auto';

    return (
        <>
            <Header />
            <main className={mainClasses}>{children}</main>
        </>
    );
};

export default RootLayout;
