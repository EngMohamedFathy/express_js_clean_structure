const {validationResult} = require("express-validator");
const {validation} = require("../helpers/responseApi");

const reporter = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //const errorMessages = errors.array().map(error => error.msg);
        const errorMessages = errors.array();

        return validation(res,errorMessages)
    }

    next();
}

module.exports = {
    reporter
}
