const { check } = require('express-validator');
const { reporter } = require('./validator');
const { User } = require('../db/models');

const addValidator = () => [
    check('first_name').not().isEmpty(),
    check('last_name').not().isEmpty(),
    check('email').not().isEmpty().isEmail().custom(value => {
        return User.findOne({ where: { email: value } })
            .then((user) => {
                if (user) {
                    return Promise.reject('E-mail already in use');
                }
            })
    }),
]

const updateValidator = () => [
    check('first_name').not().isEmpty(),
    check('last_name').not().isEmpty(),
    check('email').not().isEmpty().isEmail()
]

module.exports = {
    add: [
        addValidator(),
        reporter
    ],
    update: [
        updateValidator(),
        reporter
    ]
};
