var fs = require('fs');
const path = require('path');
const express = require('express')
module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
    });
    app.use('/', express.static('public/dist'))
    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, "../../public", 'dist/index.html'))
    })
}