const express = require('express');
const user = require('./routes/user');
const app = express();
app.use(user)

app.listen(3000, function(err){
    if(err){
        console.log(err)
    }
    console.log('Server is running on port 3000')  
});

