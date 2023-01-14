
exports.success = (response, message= "OK", results= {}, statusCode= 200) => {
    return response.status(statusCode).json({
        message: message,
        error: false,
        code: statusCode,
        results: results
    });
};

exports.error = (response, message= "Error", statusCode) => {
    // List of common HTTP request code
    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    const findCode = codes.find((code) => code == statusCode);

    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return response.status(statusCode).json({
        message: message,
        code: statusCode,
        error: true
    });
};

exports.validation = (response, errors) => {
    const statusCode = 422;
    return response.status(statusCode).json({
        message: "Validation errors",
        error: true,
        code: statusCode,
        errors: errors
    });
};

exports.created = (response,results= null) => {
    const statusCode = 201;
    return response.status(statusCode).json({
        message: "Created",
        code: statusCode,
        results: results
    });
};

exports.updated = (response,results= null) => {
    //const statusCode = 204;
    const statusCode = 202;
    return response.status(statusCode).json({
        message: "Updated",
        code: statusCode,
        results: results
    });
};

exports.deleted = (response,results= null) => {
    //const statusCode = 204;
    const statusCode = 202;
    return response.status(statusCode).json({
        message: "Deleted",
        code: statusCode,
        results: results
    });
};

exports.clientError = (response) => {
    const statusCode = 400;
    return response.status(statusCode).json({
        message: "Unauthorized",
        code: statusCode,
    });
};

exports.unauthorized = (response) => {
    const statusCode = 401;
    return response.status(statusCode).json({
        message: "Unauthorized",
        code: statusCode,
    });
};

exports.paymentRequired = (response) => {
    const statusCode = 402;
    return response.status(statusCode).json({
        message: "Payment required",
        code: statusCode,
    });
};

exports.forbidden = (response) => {
    const statusCode = 403;
    return response.status(statusCode).json({
        message: "Forbidden",
        code: statusCode,
    });
};

exports.notFound = (response) => {
    const statusCode = 404;
    return response.status(statusCode).json({
        message: "Not found",
        code: statusCode,
    });
};

exports.conflict = (response) => {
    const statusCode = 409;
    return response.status(statusCode).json({
        message: "Conflict",
        code: 409,
    });
};

exports.paging = (sequelizeResult, page, limit) => ({
    page: page,
    limit: limit,
    total: sequelizeResult.count,
    data: sequelizeResult.rows,
})
