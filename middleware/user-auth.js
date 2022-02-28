function userAuth(req, res, next) {
    const isLogged = true;
    if (!isLogged) return res.status(401).send('Not authenticated');
    res.user = { name: 'Micol', type: 'Premium' };
    next();
}

function userPerms(req, res, next) {
    const isAuthorized = res.user.type === 'Premium' ? true : false;
    if (!isAuthorized) return req.status(403).send('Not authorized')
    next();
}

module.exports = {
    userAuth,
    userPerms
}