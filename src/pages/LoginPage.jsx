import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate, Navigate } from 'react-router-dom'
import ProtectedLayout from '../layouts/ProtectedLayout';


export default function LoginPage() {
    
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    if (authStatus === 'authenticated') {
        return <Navigate to={'/user'} replace />;
       
    }
    
    const formFields = {
        signIn: {
            username: {
                placeholder: 'Enter your email',
            },
        },
        signUp: {
            name: {
                label: 'Name:',
                placeholder: 'Enter your Name:',
                isRequired: false,
                order: 1,
            },
            password: {
                label: 'Password:',
                placeholder: 'Enter your Password:',
                isRequired: false,
                order: 2,
            },
            confirm_password: {
                label: 'Confirm Password:',
                order: 3,
            },
        },
        forceNewPassword: {
            password: {
                placeholder: 'Enter your Password:',
            },
        },
        resetPassword: {
            username: {
                placeholder: 'Enter your email:',
            },
        },
        confirmResetPassword: {
            confirmation_code: {
                placeholder: 'Enter your Confirmation Code:',
                label: 'New Label',
                isRequired: false,
            },
            confirm_password: {
                placeholder: 'Enter your Password Please:',
            },
        },
        setupTOTP: {
            QR: {
                totpIssuer: 'test issuer',
                totpUsername: 'amplify_qr_test_user',
            },
            confirmation_code: {
                label: 'New Label',
                placeholder: 'Enter your Confirmation Code:',
                isRequired: false,
            },
        },
        confirmSignIn: {
            confirmation_code: {
                label: 'New Label',
                placeholder: 'Enter your Confirmation Code:',
                isRequired: false,
            },
        },
    };

    return (
        <ProtectedLayout>
        <div className="centered-container" style={{marginTop:'100px'}}>
            <Authenticator formFields={formFields}>
                {
                    ({ signOut, user }) => <main>Login successful</main> 
                }
            </Authenticator>
        </div>
        </ProtectedLayout>
    )
}
