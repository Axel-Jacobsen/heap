const Dexie = require('dexie');

class DB {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
}
db = new Dexie('main');

// Define a schema
db.version(1).stores({
    friends: 'name, age'
});


export default db;