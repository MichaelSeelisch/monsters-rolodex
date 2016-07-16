db = connect('127.0.0.1:27017/mDB');

function insertData(myObject) {
  db.names.insert(myObject)
}

function getDataBack() {
  var cursor = db.names.find();
  while(cursor.hasNext()) {
    printjson(cursor.next());
  }
}

print 'hello';

/* In MongoDB Shell:
 * $ load('/Applications/MAMP/htdocs/Private/Web-Projects/MongoDB/01. MongoDb Tutorial/01_script.js')
*/
