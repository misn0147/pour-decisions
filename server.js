const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

const exhpbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine','handlebars');