import React from 'react'
import { Logo } from './components/Logo'
import { NavMenu } from './components/NavMenu'
import { Btn } from './components/Btn'

export const Nav = () => {
    return (
        <div className='flex flex-col justify-between h-full'>
            <Logo />
            <NavMenu />
            <Btn />
        </div>
    )
}
