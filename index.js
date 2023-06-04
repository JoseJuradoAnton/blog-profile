const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//routes
const authRoutes = require('./src/routes/auth.route');

//MANEJO DE ERRORES
const AppError = require('./src/utils/appError');

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.json())
app.use(cors());

//Rutas
app.use(morgan('dev'));
app.use('/api/users', authRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Backend is running ${port}..😃😃😃`);
});

app.all('*', (req, res, next) => {
    return next(
        new AppError(`Can't find ${req.originalUrl} on this server`, 404)
    );
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'fail';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

module.exports = app;