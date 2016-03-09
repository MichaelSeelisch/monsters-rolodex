var fs    = require('fs'),
    path  = require('path');

// Splice out 'node cli_tasks.js' to leave arguments
var args  = process.argv.splice(2);

// Pull out first argument (the command)
var command = args.shift();

// Join the remaining arguments
var taskDescription = args.join(' ');

// Resolve database path relative to current working directory
var file = path.join(process.cwd(), '/.tasks');

switch(command) {
  case 'list':
    listTasks(file);
    break;

  case 'add':
    addTask(file, taskDescription);
    break;

  default:
    console.log('Usage: ' + process.argv[0] + ' list|add [taskDescription]');
    break;
}

function loadOrInitializeTaskArray(file, cb) {
  // Check if .tasks file already exists
  fs.exists(file, function(exists) {
    var tasks = [];
    if(exists) {
      // Read to-do data from .tasks file
      fs.readFile(file, 'utf8', function(err, data) {
        if(err) {
          throw err;
        }

        var data  = data.toString();

        // Parse JSON-encoded to-do data into array of tasks
        var tasks = JSON.parse(data || '[]');

        cb(tasks);
      });
    }
    else {
      // Create empty array of tasks if tasks file doesn't exists
      cb([]);
    }
  });
}

function addTask(file, taskDescription) {
  loadOrInitializeTaskArray(file, function(tasks) {
    tasks.push(taskDescription);
    storeTasks(file, tasks);
  });
}

function listTasks(file) {
  loadOrInitializeTaskArray(file, function(tasks) {
    for(var i in tasks) {
      console.log(tasks[i]);
    }
  });
}

function storeTasks(file, tasks) {
  fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
    if(err) {
      throw err;
    }

    console.log('Saved.');
  });
}

/*
  * Ausführen:
  * node 01_file_database.js list
  * oder
  * node 01_file_database.js add My new task!
*/
