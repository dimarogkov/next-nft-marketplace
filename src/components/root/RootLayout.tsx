import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Footer, Header } from '../blocks';
import { ProgressLine } from '../elements';
import { LenisScroll } from '../other';
import RootMain from './RootMain';

type Props = {
    children?: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <LenisScroll>
            <ProgressLine />
            <Header />
            <RootMain>{children}</RootMain>
            <Footer />
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </LenisScroll>
    );
};

export default RootLayout;
