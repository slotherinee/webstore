import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

type FilterDropDownProps = {
  filterName: 'Newest' | 'Oldest' | 'Price'
  setFilterName: (filter: 'Newest' | 'Oldest' | 'Price') => void
}

function FilterDropDown({ filterName, setFilterName }: FilterDropDownProps) {
  const filters = ['Newest', 'Oldest', 'Price']

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='place-self-start ml-20' asChild>
        <Button
          size='sm'
          variant='link'
          className='focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0'
        >
          {filterName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {filters.map(filter => (
          <DropdownMenuCheckboxItem
            key={filter}
            onClick={() =>
              setFilterName(filter as 'Newest' | 'Oldest' | 'Price')
            }
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
