import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import * as Index from './routes/index';

let app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Index.router);

app.use('/node_modules',  
    express.static(__dirname + '/node_modules'));

app.use('/bower_components',  
    express.static(__dirname + '/bower_components'));

app.use('/css',  
    express.static(__dirname + '/css'));

app.use('/dist',  
    express.static(__dirname  ));

app.listen(3000, () => {
    console.log(`express listening on port 3000`);
});