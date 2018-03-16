const Dexie = require('dexie');

const schema = '++id, name, priority, dueDay, dueMonth, description, creationTime, &hash';

const db = new Dexie('main');

db.version(1).stores({
    items: schema
});

export default db;