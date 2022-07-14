"use strict";
class TelegramProvider {
    connect(config) {
        console.log('Connected to Telegram');
    }
    disconnect() {
        console.log('Disconnected Telegram');
    }
    sendMessage(message) {
        console.log('Send a message: ' + message);
    }
}
class WhatsUpProvider {
    sendMessage(message) {
        console.log('Send a message: ' + message);
    }
    connect(config) {
        console.log('Connected to WhatsUp');
    }
    disconnect() {
        console.log('Disconnected WhatsUp');
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send(message) {
        this.provider.connect('connect');
        this.provider.sendMessage(message);
        this.provider.disconnect();
    }
}
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed(message) {
        setTimeout(this.send.bind(this, message), 5000);
    }
}
const sender = new NotificationSender(new WhatsUpProvider());
sender.send('Hello, world');
console.log('------------------------------------------------');
const sender2 = new NotificationSender(new TelegramProvider());
sender2.send('Bye, world!');
