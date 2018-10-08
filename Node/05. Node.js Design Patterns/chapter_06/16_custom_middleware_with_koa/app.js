const Koa = require('koa');
const app = new Koa();

app.use(require('./rateLimit'));
app.use(async me => {
    me.body = {
        "now": new Date()
    };
});

app.listen(3000);
