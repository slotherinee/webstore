import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

function FilterDropDown() {
  const [filterName, setFilterName] = useState<'Newest' | 'Oldest' | 'Price'>(
    'Newest'
  )
  const filters = ['Newest', 'Oldest', 'Price']

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='sm' variant='link'>
          {filterName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {filters.map(filter => (
          <DropdownMenuCheckboxItem
            key={filter}
            checked={filterName === filter}
            onCheckedChange={checked =>
              checked && setFilterName(filter as 'Newest' | 'Oldest' | 'Price')
            }
          >
            {filter}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default FilterDropDown
