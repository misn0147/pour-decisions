const router = require('express').Router();
const sequelize = require('../config/connection');
const { Winery, User, Comment} = require('../models');


// get all wineries for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Winery.findAll({
        attributes: [
            'id', 
            'name', 
            'location', 
            'website',
            'phone',
            'image',
            'user_id'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'winery_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        })
        .then(dbWineryData => {
            const wineries = dbWineryData.map(post => post.get({ plain: true }));
    
            res.render('homepage', {
            wineries,
            loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

    // get single Winery
router.get('/wineries/:id', (req, res) => {
    Winery.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 
            'name', 
            'location', 
            'website',
            'phone',
            'image',
            'user_id'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'winery_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
        })
        .then(dbWineryData => {
            if (!dbWineryData) {
            res.status(404).json({ message: 'No winery found with this id' });
            return;
            }
    
            const winery = dbWineryData.get({ plain: true });
    
            res.render('single-winery', {
            winery,
            loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
        res.redirect('/');
        return;
        }
    
        res.render('login');
    });

module.exports = router;