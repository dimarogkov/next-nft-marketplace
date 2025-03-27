/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { FC, forwardRef, InputHTMLAttributes, RefAttributes, useCallback, useEffect, useState } from 'react';
import { Options } from 'nuqs';
import { debounce } from '@/src/helpers';
import { Input, Label } from '../../ui';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    query: string;
    className?: string;
    classNameInput?: string;
    setQuery: (value: string | ((old: string) => string | null) | null, options?: Options) => Promise<URLSearchParams>;
}

const Search: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ query, className = '', classNameInput = '', setQuery = () => {}, ...props }, ref) => {
        const [value, setValue] = useState('');
        const applySearchValue = useCallback(debounce(setQuery, 700), []);

        useEffect(() => {
            setValue(query);
        }, [query]);

        const handleSearch = (value: string) => {
            applySearchValue(value);
            setValue(value);
        };

        return (
            <Label className={className}>
                <Input
                    ref={ref}
                    {...props}
                    name='search'
                    placeholder={props.placeholder || 'Search'}
                    value={value}
                    onChange={({ target }) => handleSearch(target.value)}
                    className={classNameInput}
                />
            </Label>
        );
    }
);

Search.displayName = 'Search';
export default Search;
