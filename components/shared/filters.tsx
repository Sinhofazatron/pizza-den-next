import { cn } from '@/lib/utils'
import { Title } from './title'
import { FilterCheckbox } from './FilterCheckbox'
import { Input } from '../ui'
import { RangeSlider } from './rangeSlider'
import { FilterCheckboxGroup } from './checkboxFilterGroup'

type Props = {
    className?: string
}

export const Filters = ({className}: Props) => {
  return (
    <div className={className}>
      <Title text='Filter by:' size='sm' className='mb-5 font-bold'/>

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="Can complite" value="1"/>
        <FilterCheckbox text="News" value="2"/>
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} default-value={0}/>
          <Input type='number' placeholder='50000' min={100} max={5000}/>
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
      </div>

      <FilterCheckboxGroup
        title='Ingredients'
        className='mt-5'
        limit={6}
        defaultItems={[
          {
            text: 'Chees',
            value: '1'
          },
          {
            text: 'Ogurz',
            value: '2'
          },{
            text: 'Chesnok',
            value: '3'
          }
      ]}
      items={[
        {
          text: 'Chees',
          value: '1'
        },
        {
          text: 'Ogurz',
          value: '2'
        },{
          text: 'Chesnok',
          value: '3'
        }
      ]}
    />
    </div>
  )
}