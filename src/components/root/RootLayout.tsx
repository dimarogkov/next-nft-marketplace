import { FC, ReactNode } from 'react';
import { Breadcrumbs, Footer, Header } from '../blocks';
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
            <Breadcrumbs />
            <RootMain>{children}</RootMain>
            <Footer />
        </LenisScroll>
    );
};

export default RootLayout;
