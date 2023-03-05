import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './@App/App'
import './@System/i18n'

import './index.css'
import 'swiper/css';
import 'tippy.js/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
