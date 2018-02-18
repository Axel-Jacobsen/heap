const Dexie = require('dexie');

const db = new Dexie('main');

db.version(1).stores({
    items: '++id, name, priority, dueDate, link, description, creationTime',
    archives: 'id, name, priority, dueDate, link, description, creationTime',
});

export default db;