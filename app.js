const express = require('express');
const session = require('express-session');

const app = express();

app.listen(3000, (req, res)=>{
    console.log("SERVER UP!");
});