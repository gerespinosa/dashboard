import React from 'react'

export const Search = () => {

    return (
        <div className='bg-gray-100 p-2 rounded-md gap-2 flex'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type='search'
                className='bg-transparent ml-1 md:w-96 min-w-2/3 placeholder-gray-500 outline-none'
                placeholder='Search here'
            >
            </input>
        </div>
    )
}
