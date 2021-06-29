const router = require('express').Router();
const { Winery, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');


// get all Wineries
router.get('/', (req, res) => {
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
    .then(dbWineryData => res.json(dbWineryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res) => {
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
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWineryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    
    Winery.create({
        name: req.body.name,
        location: req.body.location,
        website: req.body.website,
        phone: req.body.phone,
        image: req.body.image,
        user_id: req.session.user_id
    })
    .then(dbWineryData => res.json(dbWineryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req,res) => {
    Winery.update(
        {
        name: req.body.name,
        location: req.body.location,
        website: req.body.website,
        phone: req.body.phone,
        image: req.body.image,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbWineryData => {
        if (!dbWineryData) {
            res.status(404).json({ message: 'No winery found with this id' });
            return;
        }
        res.json(dbWineryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Winery.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWineryData => {
        if (!dbWineryData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWineryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router; 