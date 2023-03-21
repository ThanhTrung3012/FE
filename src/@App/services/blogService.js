import BaseService from '@Core/Api/BaseService';

class Blog extends BaseService {
    BASE_ENDPOINT = '/blog';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const blogService = new Blog();
