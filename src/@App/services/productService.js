import BaseService from '@Core/Api/BaseService';

class Product extends BaseService {
    BASE_ENDPOINT = '/product';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    searchProduct = keyword => {
        const url = this.BASE_ENDPOINT + '/search?keyword=' + keyword;
        return this.request.get(url);
    };

    getByDisplay = display => {
        const url = this.BASE_ENDPOINT + '/by-display?display=' + display;
        return this.request.get(url, { page_size: 1000 });
    };

    getByCategory = (category, query = {}) => {
        const params = {
            ...this.requestParams,
            ...query
        };
        const url = this.BASE_ENDPOINT + '/by-category/' + category;
        return this.request.get(url, { params });
    };
}

export const productService = new Product();
