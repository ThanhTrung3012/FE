import BaseService from '@Core/Api/BaseService';

class Auth extends BaseService {
    BASE_ENDPOINT = '/auth';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    login = data => {
        return this.request.post(this.BASE_ENDPOINT + '/login', data);
    };
}

export const authService = new Auth();
