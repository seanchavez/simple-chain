const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

function addLevelDBData(key, value) {
  db.put(key, value, function(err) {
    if (err) console.error(err);
  });
}

function getLevelDBData(key) {
  db.get(key, function(err, value) {
    if (err) {
      console.error(err);
    } else {
      console.log('Value = ', value);
    }
  });
}
