import React, { useState, useEffect } from 'react'

export const ProgressBar = ({ goalAmount, currentAmount, goalTitle }) => {

    const [percentage, setPercentage] = useState(`${(((currentAmount / goalAmount) * 10000) / 100)}`)

    useEffect(() => {
        setPercentage(`${(((currentAmount / goalAmount) * 10000) / 100)}`)
    }, [goalAmount, currentAmount, percentage])

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <h2 className='text-black text-sm'>{goalTitle}</h2>
                <h2 className='text-gray-400 text-xs'>{`${currentAmount}€ / ${goalAmount}€`}</h2>
            </div>
            <div className='w-full flex bg-slate-300 justify-between rounded-md'>
                <span className='h-4 border-1 rounded-md bg-blue-500 text-center text-xs text-gray-200' style={{ width: `${percentage}%` }}>{`${Math.round(percentage)}%`}</span>
            </div>
        </div>
    )
}
