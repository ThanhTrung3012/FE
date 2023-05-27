import BaseService from '@Core/Api/BaseService';

class Banner extends BaseService {
    BASE_ENDPOINT = '/banner';

    constructor(params) {
        super(params);
        this.setRequest();
    }

}

export const bannerService = new Banner();
