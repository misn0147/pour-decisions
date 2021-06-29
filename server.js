const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const fileUpload = require('express-fileupload')
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({ helpers });


const app = express();
const PORT = process.env.PORT || 3001;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// turn on routes
app.use(routes);


app.post('', (req, res) => {
    console.log('------posting-------')
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.')
    }
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/upload/' + sampleFile.name;
    console.log(sampleFile);
    var sampleFileName = sampleFile.name;

    sampleFile.mv(uploadPath, function(err) {
        if(err) return res.status(500).send(err);


        sequelize.query('UPDATE Winery SET image = ? WHERE id = "65";', ['dogs'], (err, rows) => {
            sequelize.release();

            if(!err) {
                res.redirect('/dashboard');
            }
        })
        res.send('File uploaded!');
    });

})

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
