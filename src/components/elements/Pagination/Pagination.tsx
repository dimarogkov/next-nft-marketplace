import { FC } from 'react';
import { Options } from 'nuqs';
import { EnumColorStyle, EnumText } from '@/src/types/enums';
import { Text } from '../../ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    options: {
        currentPage: number;
        endPage: number;
        setPage: (
            value: string | ((old: string) => string | null) | null,
            options?: Options
        ) => Promise<URLSearchParams>;
    };
    type?: EnumColorStyle;
};

const Pagination: FC<Props> = ({ options, type = EnumColorStyle.dark }) => {
    const { currentPage, endPage, setPage } = options;

    const paginationClasses = {
        [EnumColorStyle.dark as string]: 'bg-black',
        [EnumColorStyle.gray as string]: 'bg-gray',
    };

    return (
        endPage !== 1 && (
            <div className='relative flex gap-2.5 sm:w-fit m-auto'>
                <button
                    type='button'
                    disabled={currentPage === 1}
                    onClick={() => setPage(`${currentPage - 1}`)}
                    className={cn(
                        'group flex items-center justify-center size-12 rounded-lg transition-all duration-200 active:scale-95 hover:bg-violet-600',
                        paginationClasses[type],
                        {
                            'opacity-75 pointer-events-none': currentPage === 1,
                        }
                    )}
                >
                    <ChevronLeft className='size-6 text-gray2 transition-colors duration-200 group-hover:text-white' />
                </button>

                <div
                    className={`flex items-center w-[calc(100%-116px)] sm:w-fit height-btn text-center px-5 rounded-lg ${paginationClasses[type]}`}
                >
                    <Text textType={EnumText.large}>
                        {currentPage} / {endPage}
                    </Text>
                </div>

                <button
                    type='button'
                    disabled={currentPage === endPage}
                    onClick={() => setPage(`${currentPage + 1}`)}
                    className={cn(
                        'group flex items-center justify-center size-12 rounded-lg transition-all duration-200 active:scale-95 hover:bg-violet-600',
                        paginationClasses[type],
                        {
                            'opacity-75 pointer-events-none': currentPage === endPage,
                        }
                    )}
                >
                    <ChevronRight className='size-6 text-gray2 transition-colors duration-200 group-hover:text-white' />
                </button>
            </div>
        )
    );
};

export default Pagination;
