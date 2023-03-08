import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import React from 'react'

const RequireAuth = () => {
    const { location } = useLocation()
    const { firstname } = useAuth()

    const content = (
        firstname
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    )

    return content
}

export default RequireAuth
