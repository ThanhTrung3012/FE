import BaseService from '@Core/Api/BaseService';

class Blog extends BaseService {
    BASE_ENDPOINT = '/blog';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    getPopulars = query => {
        const params = {
            ...this.requestParams,
            ...query
        };

        const url = this.BASE_ENDPOINT + '/popular';
        return this.request(url, { params });
    };
}

export const blogService = new Blog();
