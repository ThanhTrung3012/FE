import BaseService from '@Core/Api/BaseService';

class Order extends BaseService {
    BASE_ENDPOINT = '/order';

    constructor(params) {
        super(params);
        this.setRequest();
    }

    changeStatus = data => {
        const url = this.BASE_ENDPOINT + '/change-status/' + data.id;
        return this.request.put(url, data);
    };
}

export const orderService = new Order();
