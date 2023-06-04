import BaseService from '@Core/Api/BaseService';

class Evaluate extends BaseService {
    BASE_ENDPOINT = '/product-evaluate';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    changeDisplay = (id) => {
        const url = this.BASE_ENDPOINT + '/' + id;
        return this.request.put(url)
    }
}

export const evaluateService = new Evaluate();
