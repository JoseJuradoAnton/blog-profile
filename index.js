const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.json())
app.use(cors());

//Rutas
app.use(morgan('dev'));
app.use('/api/users', async (req, res) => {
    res.send('mensaje recibido');
});
app.listen(process.env.PORT || 3000, () => {
    console.log('backend running..!');
})

app.all('*', (req, res, next) => {
    const err = new Error(`Cant find ${req.originalUrl} on this server BAD URL`);
    err.status = 'error';
    err.statusCode = 404;

    next(err);
});

module.exports = app;