import React from 'react'

export const NavMenu = () => {
    return (
        <div className='flex flex-col h-2/3 gap-4 -mt-28'>
            <ul className='text-left flex flex-col gap-4 font-sans text-sm'>
                <h2 className='text-left font-bold text-black'>MENU</h2>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-table-cells-large"></i> Overview</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-square-poll-vertical"></i> Statistics</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-wallet"></i> Savings</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-chart-pie"></i> Portfolios</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-envelope"></i> Messages</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-file"></i> Transactions</li>
            </ul>
            <ul className='text-left flex flex-col gap-4 font-sans text-sm'>
                <h2 className='text-left font-bold text-black'>GENERAL</h2>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-gear"></i> Settings</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i className="fa-solid fa-image"></i> Appearances</li>
                <li className='p-2 hover:bg-blue-400 hover:text-white hover:rounded-md'><i class="fa-solid fa-circle-info"></i> Need help?</li>
            </ul>
        </div>
    )
}
