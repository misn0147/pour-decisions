const router = require('express').Router();
const sequelize = require('../config/connection');
const { Winery, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all wineries for dashboard
router.get('/', (req, res) => {
    Winery.findAll({
        where: {
            user_id: req.session.user_id
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
            const wineries = dbWineryData.map(winery => winery.get({ plain: true }));
            res.render('dashboard', { wineries, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', (req, res) => {
    Winery.findByPk(req.params.id, {
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
            if (dbWineryData) {
            const winery = dbWineryData.get({ plain: true });
            
            res.render('edit-winery', {
                winery,
                loggedIn: true
            });
            } else {
            res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;
