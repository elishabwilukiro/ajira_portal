
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ allowedRoles }) => {

    const { user, loading } = useAuth();

    // Checking Authentication
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
            </div>
        )
    }

    // Not Authenticated
    if(!user) {
        const loginPage = allowedRoles?.includes('recruiter') 
        ? '/recruiterLogin' 
        : '/userLogin';

        return <Navigate to={loginPage} replace />
    }

    // Wrong Role
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        const loginPage = user.role === 'recruiter' 
        ? '/dashboard' 
        : '/';
        return <Navigate to={loginPage} replace />
    }

    return <Outlet />
    
}

export default ProtectedRoute;