'use client'
import React, {FC, useState} from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input, Skeleton } from '../ui';
import { setegid } from 'process';

type Item = FilterChecboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    defaultValue?: string[];
    className?: string;
    loading?: boolean;
    selected?: Set<string>
    name?: string
}

export const CheckboxFiltersGroups: FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Пошук...',
        onClickCheckbox,
        loading,
        defaultValue,
        className,
        selected,
        name
    }
) => {
    const [showAll, setShowAll] = useState(false)
    const [search, setSearch] = useState('')

    if(loading){
        return (<div className={className}>
            <p className='font-bold mb-3'>{title}</p>
            {
                ...Array(limit).fill(0).map((_, idx) => <Skeleton key={idx} className='h-6 mb-4 rounded-[8px]'></Skeleton>)
            }
            <Skeleton className=' w-28 h-6 mb-4 rounded-[8px]'></Skeleton>
            
        </div>)
    }

    const list = showAll 
    ? items.filter(item => item.text.toLowerCase().includes(search.toLowerCase())) 
    : (defaultItems || items).slice(0, limit)

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {
                showAll && (
                    <div className="mb-5">
                        <Input 
                            placeholder={searchInputPlaceholder} 
                            className='bg-gray-50 border-none'
                            onChange={onChangeSearch}
                        />
                    </div>
                )
            }

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => {
                    return (
                        <FilterCheckbox 
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={selected?.has(item.value)}
                            onCheckedChange={() => onClickCheckbox?.(item.value)}
                            name={name}
                            
                        />
                    )
                })}
            </div>
            {
                items.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4': ''}>
                        <button
                            onClick={() => setShowAll(prev => !prev)}
                            className='text-primary mt-3'
                        >
                            {showAll ? 'Сховати' : '+ Показати все'}
                        </button>
                    </div>
                )
            }
        </div>
    )
}