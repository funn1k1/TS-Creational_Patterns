"use strict";
class KvDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDb {
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDbAdapater extends KvDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistent({ key, value });
    }
}
function run(base) {
    base.save('key', 'myvalue');
}
run(new PersistentDbAdapater(new PersistentDb));
