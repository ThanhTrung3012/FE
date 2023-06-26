
import Cookies from 'js-cookie';

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
    Cookies.remove('token')
};

export const setAuthToken = token => {
    localStorage.setItem('token'.JSON.stringify(token));
};

export const getOneWayUser = () => {
    if (localStorage.getItem('one_way_user')) {
        const user = getSession('one_way_user', LOCAL_STORAGE);
        return user;
    } else {
        return {};
    }
};

export const getAuthToken = () => {
    if (Cookies.get('token')) {
        const token = Cookies.get('token');
        return token;
    } else {
        return null;
    }
};
