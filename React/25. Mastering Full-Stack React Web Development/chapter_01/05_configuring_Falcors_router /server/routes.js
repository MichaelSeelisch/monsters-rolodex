// Replaces 'fetch' function in PublishingApp.js

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/full_stack_react', { useNewUrlParser: true });


const articleSchema = {
    articleTitle: String,
    articleContent: String
};

const Article = mongoose.model('Article', articleSchema, 'articles');

const PublishingAppRoutes = [
    {
        // Replaces 'sarticlesLength' const
        route: 'articles.length',
        get: () => {
            return Article.count({}, (err, count) => count)
                .then ((articlesCountInDB) => {
                    return {
                        path: ['articles', 'length'],
                        value: articlesCountInDB
                    }
            })
        }
    },
    {
        // Replaces 'articles' const
        route: 'articles[{integers}]["id","articleTitle","articleContent"]',
        get: (pathSet) => {
            const articlesIndex = pathSet[1];

            return Article.find({}, (err, articlesDocs) => articlesDocs)
                .then ((articlesArrayFromDB) => {
                    let results = [];

                    articlesIndex.forEach((index) => {
                        const singleArticleObject = articlesArrayFromDB[index].toObject();
                        const falcorSingleArticleResult = {
                            path: ['articles', index],
                            value: singleArticleObject
                        };
                        results.push(falcorSingleArticleResult);
                    });
                    return results;
                }
            )
        }
    }
];

export default PublishingAppRoutes;
