import BaseService from '@Core/Api/BaseService';

class Evaluate extends BaseService {
    BASE_ENDPOINT = '/product-evaluate';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const evaluateService = new Evaluate();
