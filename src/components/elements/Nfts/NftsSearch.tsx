'use client';
import { useQueryState } from 'nuqs';
import { Search } from '../Search';

const NftsSearch = () => {
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [activeTabQuery] = useQueryState('activeTab');

    return <Search query={nameQuery} setQuery={setNameQuery} placeholder={`Search Your Favorite ${activeTabQuery}`} />;
};

export default NftsSearch;
