import { query } from 'express-validator'
import validate from '../middlewares/validate';
import authMiddleware from '../middlewares/auth';

export default function (services, db) {

    const auth = authMiddleware(services, db);
    return {
        create:[
            auth.checkAuth

        ],
        list: [
            auth.checkAuth
        ],
        top:[
            query('top').isInt({ min: 0, max: 25})
            .withMessage('validators.query.top.invalidRange'),
            validate,
            auth.checkAuth
        ]
    }
}