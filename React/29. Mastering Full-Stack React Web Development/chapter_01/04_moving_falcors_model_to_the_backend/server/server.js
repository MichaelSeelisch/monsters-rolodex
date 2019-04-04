import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';

mongoose.connect('mongodb://localhost/full_stack_react', { useNewUrlParser: true });

const articleSchema = {
    articleTitle: String,
    articleContent: String
};

const Article = mongoose.model('Article', articleSchema, 'articles');

const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({ extended: false }));

let cache = {
    articles: [
        {
            id: 987654,
            articleTitle: 'Lorem ipsum - article one',
            articleContent: 'Here goes the content of the article'
        },
        {
            id: 123456,
            articleTitle: 'Lorem ipsum - article two from backend',
            articleContent: 'Sky is the limit, the content goes here.'
        }
    ]
};

var model = new falcor.Model({
    cache: cache
});

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
    return model.asDataSource();
}));

app.use(express.static('dist'));

app.get('/', (req, res) => {
    Article.find( (err, articlesDocs) => {
        if (!err) {
            const ourArticles = articlesDocs.map((articleItem) => {
                return `<h2>${articleItem.articleTitle}</h2>${articleItem.articleContent}`;
            }).join('<br/>');

            res.send(`<h1>Publishing App Initial Application!</h1>${ourArticles}`);
        } else {
            res.send(`<h1>Error!</h1>${err}`);
        }
    });
});

app.server.listen(process.env.PORT || 3000);

console.log(`Started on port ${app.server.address().port}`);

export default app;
