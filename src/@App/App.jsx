import AppContextProvider from './AppContext';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import appRouterConfigs from './AppRouters';
import { HelmetProvider } from 'react-helmet-async';

function App() {
    return (
        <AppContextProvider>
            <HelmetProvider>
                <RouterProvider router={appRouterConfigs} />
                <ToastContainer />
            </HelmetProvider>
        </AppContextProvider>
    );
}

export default App;
