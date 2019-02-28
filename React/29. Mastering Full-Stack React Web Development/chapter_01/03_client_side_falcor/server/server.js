import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true });

const articleSchema = {
    articleTitle: String,
    articleContent: String
};

const Article = mongoose.model('Article', articleSchema, 'articles');

const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

app.use(express.static('dist'));

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({ extended: false }));
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
