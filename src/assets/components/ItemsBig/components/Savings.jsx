import React from 'react'
import { ProgressBar } from './ProgressBar'


export const Savings = () => {
    return (
        <div className='flex flex-col gap-2 bg-white p-2 h-72 rounded-md '>
            <div className='flex flex-col gap-2 h-full'>
                <h2 className='text-left p-2 font-bold text-gray-400 text-sm'>Total Savings</h2>
                <h2 className='text-3xl text-black flex'>406.27€</h2>
                <div className='flex gap-1 text-sm'><p className='text-green-700'>+33.3€</p><p className='text-gray-400'>than the last month</p></div>
            </div>
            <hr />
            <div className='flex flex-col justify-start text-left gap-2 h-full'>
                <ProgressBar goalTitle={'Dream studio'} goalAmount={1000} currentAmount={500} />
                <ProgressBar goalTitle={'Education'} goalAmount={10000} currentAmount={8762} />
                <ProgressBar goalTitle={'Health Care'} goalAmount={300} currentAmount={100} />
            </div>
        </div>
    )
}
