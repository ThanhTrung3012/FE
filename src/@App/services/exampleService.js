import BaseService from '@Core/Api/BaseService';

class Example extends BaseService {
    BASE_URL='https://jsonplaceholder.typicode.com'
    BASE_ENDPOINT='/todos'

    constructor(params) {
        super(params);
        this.setRequest()
    }
}

export const exampleService = new Example();
