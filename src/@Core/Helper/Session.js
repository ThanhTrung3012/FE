/*
 * Created Date: 03-02-2023, 21:00 pm
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

const LOCAL_STORAGE = 'local';
const SESSION_STORAGE = 'session';

export const setSession = (name, type, value) => {
    if (!name || !type || !value)
        return console.error(
            'Enter missing information name or type or value ---> @Core/Helper/Session.js'
        );

    // return if the browser doesn't support it Storage
    if (typeof Storage === 'undefined') return console.error('Browser does not support Storage');

    if (type === SESSION_STORAGE) {
        sessionStorage.setItem(name, JSON.stringify(value));
    } else if (type === LOCAL_STORAGE) {
        localStorage.setItem(name, JSON.stringify(value));
    }
};

export const getSession = (name, type) => {
    let data;

    if (!name || !type)
        return console.error('Enter missing information name or type ---> @Core/Helper/Session.js');

    // return if the browser doesn't support it Storage
    if (typeof Storage === 'undefined') return console.error('Browser does not support Storage');

    if (type === SESSION_STORAGE) {
        data = sessionStorage.getItem(name);
    } else if (type === LOCAL_STORAGE) {
        data = localStorage.getItem(name);
    }

    if (data == null) console.error(`No key in ${type}Storage or value equal to null`);
    return JSON.parse(data);
};

export const removeSession = (name, type) => {
    if (!name || !type)
        return console.error('Enter missing information name or type ---> @Core/Helper/Session.js');

    if (typeof Storage === 'undefined') {
        // return if the browser doesn't support it Storage
        return console.error('Browser does not support Storage');
    } else {
        if (type === SESSION_STORAGE) {
            setSession.removeItem(name);
        } else if (type === LOCAL_STORAGE) {
            localStorage.removeItem(name);
        }
    }
};

export const clearSession = () => {
    localStorage.clear();
    sessionStorage.clear();
};

export const setAuthToken = token => {
    localStorage.setItem('token'.JSON.stringify(token));
};

export const getAuthToken = () => {
    if (localStorage.getItem('token')) {
        const token = JSON.parse(localStorage.getItem('token'));
        return token;
    } else {
        return null;
    }
};
