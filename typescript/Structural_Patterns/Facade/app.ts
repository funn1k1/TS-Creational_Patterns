class Log {
  log(message: string) {
    console.log(message);
  }
}

class Notify {
  send(to: string, template: string) {
    console.log(`Отправляю ${template} to: ${to}`);
  }
}

class Template {
  private templates = [
    { name: 'other', template: '<h1>Шаблон!</h1>' }
  ];

  getByName(name: string) {
    return this.templates.find(t => t.name == name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }

  send(to: string, templateName: string) {
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