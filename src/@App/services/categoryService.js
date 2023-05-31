import BaseService from '@Core/Api/BaseService';

class Category extends BaseService {
    BASE_ENDPOINT = '/category';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    getOptions = (id) => {
        const endpoint = this.BASE_ENDPOINT + '/get-options/' + id;
        return this.request.get(endpoint);
    }

    getChildrens = (id) => {
        const endpoint = this.BASE_ENDPOINT + '/childrens/' + id;
        return this.request.get(endpoint);
    }

    getMenus = () => {
        const endpoint = this.BASE_ENDPOINT + '/menu'
        return this.request.get(endpoint);
    }
}

export const categoryService = new Category();
