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
                    <ToastContainer />
                </CoreConfirmProvider>
            ) : (
                <AppContextProvider>
                    <HelmetProvider>
                        <RouterProvider router={appRouterConfigs} />
                    </HelmetProvider>
                </AppContextProvider>
            )}
        </CoreThemeProvider>
    );
}

export default App;
