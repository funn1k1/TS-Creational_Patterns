class KvDatabase {
  private db: Map<string, string> = new Map();

  save(key: string, value: string) {
    this.db.set(key, value);
  }
}

class PersistentDb {
  savePersistent(_: Object) {

  }
}

class PersistentDbAdapater extends KvDatabase {
  constructor(public database: PersistentDb) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}

function run(base: KvDatabase) {
  base.save('key', 'myvalue');
}

run(new PersistentDbAdapater(new PersistentDb))