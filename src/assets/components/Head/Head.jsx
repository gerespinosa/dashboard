import React from 'react'
import { Search } from './components/Search'
import { Avatar, Divider } from '@mui/material'

export const Head = () => {

    return (
        <div className='flex justify-between items-center'>
            <h2 className='3xl font-bold'>Dashboard</h2>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Search />
                    <div className='rounded-md max-w-10 max-h-10 bg-gray-100 p-2 text-md'>
                        <i className="fa-regular fa-bell"></i>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <Avatar alt='avatar-profile' src='https://espinosatoscano.com/assets/profile.png' />
                    <div className='flex flex-col text-left'>
                        <h3 className='text-sm font-bold'>Ger Espinosa</h3>
                        <p className='text-xs'>ger@espinosatoscano.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
