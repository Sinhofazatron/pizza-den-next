'use client'

import { FilterChecboxProps, FilterCheckbox } from './FilterCheckbox'
import { Input } from '../ui'

type Item = FilterChecboxProps

type Props = {
    title: string,
    items: Item[],
    defaultItems?: Item[],
    limit?: number,
    searchInputPlaceHolder?: string,
    onChange?: (values: string[]) => void,
    defaultValue?: string[],
    className?: string
}

export const FilterCheckboxGroup = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceHolder = 'Search...',
    onChange,
    defaultValue,
    className
}: Props) => {
  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      <div className='mb-5'>
        <Input placeholder={searchInputPlaceHolder} className='bg-gray-50 border-none'/>
      </div>
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {items.map((item, index) => (
          <FilterCheckbox
            key={String(item.value)}
            onCheckedChange={(ids) => console.log(ids)} 
            checked={false}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment} 
          />
        ))}
      </div>
    </div>
  )
}