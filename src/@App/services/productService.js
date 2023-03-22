import BaseService from '@Core/Api/BaseService';

class Product extends BaseService {
    BASE_ENDPOINT = '/product';

    constructor(params) {
        super(params);
        this.setRequest();
    }
}

export const productService = new Product();
