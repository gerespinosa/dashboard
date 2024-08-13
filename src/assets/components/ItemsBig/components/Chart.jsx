import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export const Chart = () => {
    return (
        <div className='bg-white p-2 w-full rounded-md h-72'>
            <h2 className='text-left p-2 font-bold'>Statistics</h2>
            <BarChart
                sx={() => ({
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: '#FFF',
                    },
                    [`.${axisClasses.tickLabel} `]: {
                        stroke: '#D3D3D3'
                    },
                })}
                series={[
                    { data: [35, 44, 24, 34, 45, 30], label: 'Earnings', color: "#377CF6" },
                    { data: [51, 6, 49, 30, 32, 45], label: 'Savings', color: "#95E0FB  " },
                ]}
                height={240}
                xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                borderRadius={10}
                grid={{ horizontal: true }}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'top', horizontal: 'right' },
                        padding: 0,
                    },
                }}
            />
        </div>
    )
}
