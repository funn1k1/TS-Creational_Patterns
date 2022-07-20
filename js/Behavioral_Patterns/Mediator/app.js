"use strict";
class Logger {
    log(message) {
        console.log(message);
    }
}
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Sending notification');
    }
}
class EventHandler extends Mediated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    constructor(notifications, logger, handler) {
        this.notifications = notifications;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Sent');
                break;
        }
    }
}
const handler = new EventHandler();
const logger = new Logger();
const notifications = new Notifications();
const m = new NotificationMediator(notifications, logger, handler);
handler.setMediator(m);
handler.myEvent();
