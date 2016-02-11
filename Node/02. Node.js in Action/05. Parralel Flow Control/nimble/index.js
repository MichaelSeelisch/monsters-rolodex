var flow = require('nimble');
    exec = require('child_process').exec;
    
 var dl_Folder = '/Users/michael/Downloads';    
    
 function downloadNodeVersion(version, destination, callback) {
     var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
     var filepath = destination + '/' + version + '.tgz';
     
     exec('curl ' + url + ' >' + filepath, callback);  
 };
 
 flow.series([
     function(callback) {
         flow.parallel([
             
             function(callback) {
                 console.log('Downloading Node v0.4.6...');
                 downloadNodeVersion('0.4.6', dl_Folder, callback);
             },
             
             function(callback) {
                 console.log('Downloading Node v0.4.7...');
                 downloadNodeVersion('0.4.7', dl_Folder, callback);
             },
         ], callback);
     },
     
     function(callback) {
         console.log('Creating archive of downloaded files...');
         exec(
             'tar cvf node_distros.tar ' + dl_Folder + '/0.4.6.tgz ' + dl_Folder + '/0.4.7.tgz',
             function(error, stdout, stderr) {
                 console.log('All done!');
                 callback();
             }
         );
     }
 ]);