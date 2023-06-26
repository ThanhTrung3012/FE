

import AppContextProvider from './AppContext';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import appRouterConfigs from './AppRouters';
import { HelmetProvider } from 'react-helmet-async';
import CoreThemeProvider from '@Core/components/Theme/CoreTheme';
import CoreConfirmProvider from '@Core/components/Confirm/CoreConfirm';

function App() {
    const isCms = window.location.pathname.includes('/cms');

    return (
        <CoreThemeProvider>
            {isCms ? (
                <CoreConfirmProvider>
                    <RouterProvider router={appRouterConfigs} />
                    <ToastContainer position='top-center' icon={false} hideProgressBar={true} autoClose={3000} className='toast_web'/>
                </CoreConfirmProvider>
            ) : (
                <AppContextProvider>
                    <HelmetProvider>
                        <RouterProvider router={appRouterConfigs} />
                        <ToastContainer position='top-center' icon={false} hideProgressBar={true} autoClose={3000} className='toast_web'/>
                    </HelmetProvider>
                </AppContextProvider>
            )}
        </CoreThemeProvider>
    );
}

export default App;
