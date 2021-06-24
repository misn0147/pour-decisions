const router = require('express').Router();
const sequelize = require('../config/connection');
const { Winery, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all wineries for dashboard
router.get('/', withAuth, (req, res) => {
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
            const posts = dbWineryData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
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
