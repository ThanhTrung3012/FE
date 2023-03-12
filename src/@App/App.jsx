import AppContextProvider from './AppContext';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import appRouterConfigs from './AppRouters';
import { HelmetProvider } from 'react-helmet-async';
import CoreThemeProvider from '@Core/components/Theme/CoreTheme';

function App() {
    return (
        <CoreThemeProvider>
            <AppContextProvider>
                <HelmetProvider>
                    <RouterProvider router={appRouterConfigs} />
                    <ToastContainer />
                </HelmetProvider>
            </AppContextProvider>
        </CoreThemeProvider>
    );
}

export default App;
