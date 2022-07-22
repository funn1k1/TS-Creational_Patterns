"use strict";
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log('NotificationService has received a notification');
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log('LeadService has received a notification');
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Andrew', '+442477180125');
const subscriber1 = new NotificationService();
const subscriber2 = new LeadService();
subject.attach(subscriber1);
subject.notify();
subject.attach(subscriber2);
subject.notify();
subject.detach(subscriber2);
subject.notify();
