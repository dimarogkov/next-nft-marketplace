/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useEffect, useState } from 'react';
import { useQueryState } from 'nuqs';
import { debounce } from '@/src/helpers';
import { Input, Label } from '../../ui';

const Search = ({ className = '' }) => {
    const [nameQuery, setNameQuery] = useQueryState('name', { defaultValue: '' });
    const [value, setValue] = useState('');

    const applySearchValue = useCallback(debounce(setNameQuery, 700), []);

    useEffect(() => {
        setValue(nameQuery);
    }, [nameQuery]);

    const handleSearch = (value: string) => {
        applySearchValue(value);
        setValue(value);
    };

    return (
        <Label className={className}>
            <Input
                name='search'
                placeholder='Search your favorite NFTs'
                value={value}
                onChange={({ target }) => handleSearch(target.value)}
            />
        </Label>
    );
};

export default Search;
