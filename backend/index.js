require('dotenv').config();
const dbConnection = require('./config/database');

const app = require('express')();

dbConnection().then(() => {
 require('./config/express')(app);
 require('./config/routes')(app);
 app.listen(process.env.PORT, console.log(`Port ${process.env.PORT}!`));
 console.log('Connected');
}).catch(console.error);
