"use strict";
class PaymentAPI {
    constructor() {
        this.data = [
            {
                id: 1,
                sum: 1000
            },
            {
                id: 2,
                sum: 2000
            }
        ];
    }
    getPaymentDetail(id) {
        return this.data.find(d => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Attempting to get payment data');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
console.log(proxy.getPaymentDetail(2));
console.log('-------------------------------------------');
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(2));
