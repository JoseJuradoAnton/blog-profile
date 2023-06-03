require('dotenv').config();
const app = require('./index');
const { db } = require('./src/database/database');

//Autenticación con la DB
db.authenticate()
    .then(() =>
        console.log('DataBAse Authenticated..!')
    )
    .catch(
        (error) => console.log(error)
    );

//Sincronización con la DB
db.sync()
    .then(() => console.log('DataBase Synced'))
    .catch((error) => console.log(error)
    );

const port = 3000;
app.listen(port, () => {
    console.log(`App on port ${port}..😃😃😃`);
});