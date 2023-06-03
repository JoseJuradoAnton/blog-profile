const express = require('express');
const app = express();
app.use(express.json());
const morgan = require('morgan');
const cors = require('cors');

//Rutas
app.use('/api/users', ((req, res, next) => {
    res.status(200).json({
        status: 'mensaje recibido',
    });
}));

app.all('*', (req, res, next) => {
    const err = new Error(`Cant find ${req.originalUrl} on this server BAD URL`);
    err.status = 'error';
    err.statusCode = 404;

    next(err);
});

module.exports = app;