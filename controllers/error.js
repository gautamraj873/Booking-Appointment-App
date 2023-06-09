const path = require('path');

exports.get404 = (req, res, next) => {
    res.status(400).sendFile(path.join(__dirname, '..','views', '404.html'));
};