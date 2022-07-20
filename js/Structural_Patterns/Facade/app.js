"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    log(message) {
        console.log(message);
    }
}
class Notify {
    send(to, template) {
        console.log(`Отправляю ${template} to: ${to}`);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: 'other', template: '<h1>Шаблон!</h1>' }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name == name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Logger();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Не найден шаблон');
            return;
        }
        this.notify.send(to, data.template);
        this.logger.log('Шаблон отправлен');
    }
}
const nf = new NotificationFacade();
nf.send('admin@admin.com', 'other');
