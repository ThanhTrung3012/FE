import BaseService from '@Core/Api/BaseService';

class User extends BaseService {
    BASE_ENDPOINT = '/user';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const userService = new User();
