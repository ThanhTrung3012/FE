/*
 * Created Date: 08-02-2023, 11:15 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    // .use(i18nextPlugin)
    .init({
        backend: {
            loadPath: () => {
                return '/locales/{{lng}}/{{ns}}.json';
                // return '../locales/{{lng}}/{{ns}}.json'
                // return '../../cms/locales/locales/../{{lng}}/{{ns}}.json'
            }
        },
        preload: ['en'],
        fallbackLng: 'en',
        lng: 'en',
        debug: false,
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        saveMissing: true,
        appendNamespaceToMissingKey: true,
        partialBundledLanguages: true
    });

export default i18n