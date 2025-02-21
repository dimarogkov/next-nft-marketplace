import { FC, ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';

const work_sans = Work_Sans({ subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    const htmlClasses = 'h-full';
    const bodyClasses = 'flex flex-col min-h-full text-white';

    return (
        <html lang='en' className={htmlClasses} suppressHydrationWarning>
            <body className={`${bodyClasses} ${work_sans.className}`}>{children}</body>
        </html>
    );
};

export default Root;
