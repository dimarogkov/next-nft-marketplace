import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const FullPage: FC<Props> = ({ children }) => {
    return (
        <section className='relative flex flex-col grow w-full section-height-full section-padding'>
            <div className='flex flex-col justify-center grow container'>{children}</div>
        </section>
    );
};

export default FullPage;
