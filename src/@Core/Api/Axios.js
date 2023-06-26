

import axios from 'axios';
import queryString from 'query-string';

const createInstance = (baseUrl, middleware = () => {}) => {
    const options = {
        baseURL: baseUrl,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        paramsSerializer: {
            serializer: params => {
                return queryString.stringify(params);
            }
        }
    };

    const instance = axios.create(options);

    instance.interceptors.request.use(
        async requestConfig => {
            await Promise.all(middleware(requestConfig));
            return requestConfig;
        },

        requestError => {
            return Promise.reject(requestError);
        }
    );

    instance.interceptors.response.use(
        response => {
            if (response && response.data) {
                return response.data;
            } else {
                return response;
            }
        },
        error => {
            return Promise.reject(error);
        }
    );

    return instance;
};

export default createInstance;
