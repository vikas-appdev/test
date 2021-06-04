
var express = require('express');
const dotEnv = require('dotenv').config();

const dbConnection = require('./database/connection');
dbConnection();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
})



