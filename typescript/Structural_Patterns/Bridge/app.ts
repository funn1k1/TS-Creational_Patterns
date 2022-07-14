interface IProvider {
  sendMessage(message: string): void;

  connect(config: unknown): void;

  disconnect(): void;
}

class TelegramProvider implements IProvider {
  connect(config: string): void {
    console.log('Connected to Telegram');
  }

  disconnect(): void {
    console.log('Disconnected Telegram');
  }

  sendMessage(message: string): void {
    console.log('Send a message: ' + message);
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log('Send a message: ' + message);
  }
  
  connect(config: string): void {
    console.log('Connected to WhatsUp');
  }

  disconnect(): void {
    console.log('Disconnected WhatsUp');
  }
}

class NotificationSender {
  constructor(private provider: IProvider) { }

  send(message: string) {
    this.provider.connect('connect');
    this.provider.sendMessage(message);
    this.provider.disconnect();
  }

}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }

  sendDelayed(message: string) {
    setTimeout(this.send.bind(this, message), 5000);
  }
}

const sender = new NotificationSender(new WhatsUpProvider());
sender.send('Hello, world');
console.log('------------------------------------------------');
const sender2 = new NotificationSender(new TelegramProvider());
sender2.send('Bye, world!');