const Dexie = require('dexie');

const schema = '++id, name, dueDay, dueMonth, creationTime, tag';

const db = new Dexie('main');

db.version(1).stores({
    items: schema,
    archives: schema
});

class DB {

    constructor() {
        this.db = db
    }

    // DB read / write Operations

    addItem(item, table) {
        return this.db[table].add(item)
    }

    putItem(item, table) {
        return this.db[table].put(item)
    }

    getAllItemsAsync() {
        return this.db.items.toArray()
    }

    getItemByIdAsync(id) {
        return this.db.items.where("id").equals(id).toArray()
    }

    deleteItemByIdAsync(id) {
        return this.getItemByIdAsync(id)
            .then(item => this.db.archives.add(item))
            .then(() => this.db.items.delete(id))
    }

    // Other

    close() {
        this.db.close()
    }

}

export default new DB();
