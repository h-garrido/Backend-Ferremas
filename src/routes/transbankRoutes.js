const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const transbankController = require('../controllers/transbankController');

router.post(
    '/create',
    [
        check('buyOrder').notEmpty().withMessage('buyOrder is required'),
        check('sessionId').notEmpty().withMessage('sessionId is required'),
        check('amount').isFloat({ gt: 0 }).withMessage('amount must be a positive number'),
        check('returnUrl').isURL().withMessage('returnUrl must be a valid URL')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    transbankController.createTransaction
);

router.post(
    '/commit',
    [
        check('token').notEmpty().withMessage('token is required')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    transbankController.commitTransaction
);

module.exports = router;
