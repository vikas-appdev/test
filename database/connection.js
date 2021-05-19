const mongoose = require('mongoose');

module.exports = async () =>{
    try{
        await mongoose.connect("mongodb://localhost/xyzabc", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    }catch(err){
        console.log('Database connection err', err);
        throw new Error(err);
    }
}