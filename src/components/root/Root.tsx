import { FC, ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const font = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

type Props = {
    children?: ReactNode;
};

const Root: FC<Props> = ({ children }) => {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={font.className}>{children}</body>
        </html>
    );
};

export default Root;
