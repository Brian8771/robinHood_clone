import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeHeader from './HomeHeader'

const HomeLayout = () => {
    return (
        <>
            <HomeHeader />
            <Outlet />
        </>
    )
}

export default HomeLayout
