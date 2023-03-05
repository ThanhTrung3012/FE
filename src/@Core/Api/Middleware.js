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

import { getAuthToken } from '../Helper/Session.js';

const excludeAuthenApi = [];
const withAuthToken = async requestConfig => {
    const authToken = getAuthToken();
    const { url } = requestConfig;

    if (!url.includes(excludeAuthenApi)) {
        if (authToken) {
            requestConfig.headers.Authorization = `Bearer ${authToken}`;
            // requestConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
            return requestConfig;
        }

        return requestConfig;
    }

    return requestConfig;
};

export default {
    auth: withAuthToken
};
