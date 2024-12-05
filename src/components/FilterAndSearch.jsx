import React from 'react'
import { PiSlidersHorizontal } from "react-icons/pi";
import { GoSearch } from "react-icons/go";

function FilterAndSearch() {
    return (
        // Search and filters
        <div className='w-full px-5 py-2 flex justify-between items-center'>
            {/* Searchbar */}
            <div className='flex bg-zinc-100 rounded-full items-center '>
                <span className='px-4 py-4 bg-blue-100 rounded-l-full text-blue-600' ><GoSearch size={25} /></span>
                <input className='outline-none px-3 py-4 rounded-r-full bg-blue-50' type="text" name="" id="" placeholder='Quick Search...'/>
            </div>
            {/* Filters */}
            <div className='flex flex-row py-4 px-3 bg-blue-100 rounded-full'>
                <a href="" className='px-2 flex text-blue-600'>Filters<span className='pl-2'><PiSlidersHorizontal size={25} /></span> </a>
            </div>
        </div>
    )
}

export default FilterAndSearch