import { FC, ReactNode } from 'react';
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
        </LenisScroll>
    );
};

export default RootLayout;
