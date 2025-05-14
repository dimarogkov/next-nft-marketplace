import { FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
    children?: ReactNode;
    isBreadcrumbsExist?: boolean;
};

const FullPage: FC<Props> = ({ children, isBreadcrumbsExist = false }) => {
    return (
        <section
            className={cn('relative flex flex-col grow w-full section-height-full section-padding', {
                '-mt-[46px] sm:-mt-[50px]': isBreadcrumbsExist,
            })}
        >
            <div className='flex flex-col justify-center grow container'>{children}</div>
        </section>
    );
};

export default FullPage;
