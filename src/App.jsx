import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
//import './Style.css'
import awsExports from './aws-exports';
Amplify.configure(awsExports);
import MyThemeProvider from './context/MyThemeContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <>
      <Authenticator.Provider>
          <MyThemeProvider>
            <AppRoutes />
          </MyThemeProvider>
      </Authenticator.Provider>
    </>
  );
}