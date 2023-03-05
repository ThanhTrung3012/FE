/*
 * Created Date: 04-02-2023, 10:45 pm
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

import axios from 'axios';
import queryString from 'query-string';

const createInstance = (baseUrl, middleware = () => {}) => {
    const options = {
        baseURL: baseUrl,
        timeout: 3000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
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
