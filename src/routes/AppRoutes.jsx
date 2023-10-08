// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto child components

import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx';;
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage.jsx';
import PageNotFound from "../pages/PageNotFound"
import LogoutPage from '../pages/LogoutPage';
import UserPage from '../pages/UserPage.jsx';

// child components using {...props}
export default function AppRoutes(props) {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            
            <Route path="/user" element={
                <ProtectedRoute>
                    <UserPage {...props} />
                </ProtectedRoute>
            }/>

            <Route path="logout" element={
                <ProtectedRoute>
                    <LogoutPage/>
                </ProtectedRoute>
            }/>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
// Name this file AppRoutes.jsx and store in 'routes' folder