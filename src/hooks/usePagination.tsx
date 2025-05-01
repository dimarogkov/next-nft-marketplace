'use client';
import { useQueryState } from 'nuqs';

const usePagination = (arr: any[], perPage: number = 6) => {
    const [pageQuery, setPageQuery] = useQueryState('page', { defaultValue: '' });

    const start = (+pageQuery - 1) * perPage;
    const end = +pageQuery * perPage;

    const options = { currentPage: +pageQuery, endPage: Math.ceil(arr.length / perPage), setPage: setPageQuery };
    const data = arr.slice(start, end);

    return { data, ...options };
};

export default usePagination;
