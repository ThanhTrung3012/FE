import BaseService from '@Core/Api/BaseService';

class Banner extends BaseService {
    BASE_ENDPOINT = '/banner';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    getByDisplay = (display) => {
        const url = this.BASE_ENDPOINT + '/by-display?display=' + display;
        return this.request.get(url);
    }
}

export const bannerService = new Banner();
