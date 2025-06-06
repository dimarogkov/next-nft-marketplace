'use client';
import { useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { Search } from '../Search';

const NftsSearch = () => {
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [_, setPageQuery] = useQueryState('page', { defaultValue: '' });
    const [tabQuery] = useQueryState('tab');

    useEffect(() => {
        setPageQuery('1');
    }, [nameQuery, setPageQuery]);

    return <Search query={nameQuery} setQuery={setNameQuery} placeholder={`Search Your Favorite ${tabQuery}`} />;
};

export default NftsSearch;
