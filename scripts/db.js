const Dexie = require('dexie');

const schema = '++id, name, priority, dueDay, dueMonth, description, creationTime, &hash';

const db = new Dexie('main');

db.version(1).stores({
    items: schema,
    archives: schema,
});

db['items'].hook('creating', function (primaryKey, friend) {
    console.log(`Saving "${friend.name}" but we don't now the primary key yet ("${primaryKey}").`);
    this.onsuccess = function (primaryKey) {
      console.log(`Saved "${friend.name}" with primary key "${primaryKey}".`);
    };
    return undefined;
});

db.open();

export default db;