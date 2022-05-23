// import body and validationResult
import { body, validationResult } from 'express-validator';

// create body validator to check if formular was filled in correctly
// this is ONLY the check if everything is filled in properly
export const validateBody = () => {
    return [
        // put everything inside the array you want to return
        body("name").not().isEmpty().isLength({ min: 4 }),
        body("alpha2Code").isISO31661Alpha2(),
        body("alpha3code").isISO31661Alpha2(),
    ];
};

export const validate = (req, res, next) => {
    const error = validationResult(req);
    if (errors.isEmpty()) {
        next();
    } else {
        res.status(400).json({ errors: errors.array() });
    }
};
// create a 