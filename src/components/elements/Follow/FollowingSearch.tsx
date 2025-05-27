'use client';
import { useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { Search } from '../Search';

const FollowingSearch = () => {
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [_, setPageQuery] = useQueryState('page', { defaultValue: '' });

    useEffect(() => {
        setPageQuery('1');
    }, [nameQuery, setPageQuery]);

    return <Search query={nameQuery} setQuery={setNameQuery} placeholder='Search Artist' />;
};

export default FollowingSearch;
