import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Navigate } from 'react-router-dom'

export default function LogoutPage() {
    const { authStatus, signOut } = useAuthenticator((context) => [context.authStatus]);
    signOut();
    return <Navigate to={'/login'} replace />;
}
