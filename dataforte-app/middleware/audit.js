const createdAt = (req, res, next) => {
    req.body.createdAt = Date.now();
    req.body.createdBy = req.user? req.user.email:'anonymous';
    next();
}

const updatedAt = (req, res, next) => {
    req.body.updatedAt = Date.now();
    req.body.updatedBy = req.user? req.user.email:'anonymous';
    next();
}

export { createdAt, updatedAt}