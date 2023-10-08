import { Outlet, Navigate } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';

// wrap around logged-in user only routes to protect them
export default function ProtectedRoute({ redirectPath = '/login', children }) {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== 'authenticated') {
        return <Navigate to={redirectPath} replace />;
    }
    // works for both nested and standalone routes
    return (
        children ? <>{children}</> : <Outlet />
    );
}
// save this as ProtectedRoute.jsx in 'routes' folder