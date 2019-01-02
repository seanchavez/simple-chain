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

function addDataToLevelDB(value) {
  let i = 0;
  db.createReadStream()
    .on('data', function(data) {
      console.log(data);
      i++;
    })
    .on('error', function(err) {
      return console.log('Unable to read data stream!', err);
    })
    .on('close', function() {
      console.log('Block #' + i);
      addLevelDBData(i, value);
    });
}

(function theLoop(i) {
  setTimeout(function() {
    addDataToLevelDB('Testing data');
    if (--i) theLoop(i);
  }, 100);
})(10);
