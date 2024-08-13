import React from 'react'

import Card from '@mui/material/Card';

export const Items = ({ cardTitle, cardAmount, cardChange, cardIcon }) => {
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', gap: '1em', padding: '1em', borderRadius: '1em' }}>
            <div className='text-gray-400 flex gap-1'><i className={cardIcon}></i>{cardTitle}</div>
            <h3 className='flex font-semibold text-2xl text-black'>{cardAmount}€</h3>
            <div className='flex gap-1 text-xs'><p className='text-green-700'>{cardChange}€</p><p className='text-gray-400'>than the last month</p></div>
        </Card>
    )
}
