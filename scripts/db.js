const Dexie = require('dexie');

const db = new Dexie('main');
db.version(1).stores({
    item: '++id, name, priority, dueDate, link, info',
});

export default db;